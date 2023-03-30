import bcrypt from "bcrypt";
import logger from "../logger";
import jwt from "jsonwebtoken";

import { User } from '../generated/client/index';
import { prisma } from "../prismaInit";

// import logger from "logger";
// import logger from "logger";

export const hashPassword = async (password: string, saltRound: number = 10): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(saltRound);

        return await bcrypt.hash(password, salt);

    } catch (error) {
        logger.error(`Hash password error: ${error}`)
        throw error;
    }

};

export const isPasswordValid = async (password: string, hash: string): Promise<boolean> => {
    try {
        // Compare password
        return await bcrypt.compare(password, hash)
    } catch (error) {
        logger.error(`IsPasswordValid error: ${error}`)
    }

    // Return false if error
    return false
};

export type UserPayloadType = {
    user_id: string
    username: string
    email: string
    name: string
    roles: string[]
};

type tokensType = {
    accessToken: String
    refreshToken: String
};
export const generateJWT = async (userPayload: UserPayloadType): Promise<tokensType> => {
    const accessToken = generateAccessToken(userPayload);
    const refreshToken = generateRefreshToken(userPayload);

    const userRefreshToken = await prisma.userRefreshToken.findFirst({ where: { user_id: userPayload.user_id } });
    if (userRefreshToken) {
        await prisma.userRefreshToken.delete({ where: { user_id: userPayload.user_id } });
    }

    await prisma.userRefreshToken.create({
        data: {
            user_id: userPayload.user_id,
            token: refreshToken
        }
    });

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
};

export const generateAccessToken = (userPayload: UserPayloadType): string => {
    const access_secret = process.env.ACCESS_SECRET_KEY;
    const accessToken = jwt.sign(userPayload, access_secret, {
        expiresIn: '15min'
    });

    return accessToken;
};

export const generateRefreshToken = (userPayload: UserPayloadType): string => {
    const refresh_secret = process.env.REFRESH_SECRET_KEY;

    const refreshToken = jwt.sign(userPayload, refresh_secret, {
        expiresIn: '7d'
    });

    return refreshToken;
};

export const checkRefreshToken = (refreshToken: string): UserPayloadType => {
    const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

    try {
        let decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);
        // @ts-ignore
        return decoded;
    } catch (err) {
        throw new Error('Invalid access token');
    }
};

export const checkAccessToken = (accessToken: String): UserPayloadType => {

    const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY;

    try {
        let decoded = jwt.verify(accessToken, ACCESS_SECRET_KEY);
        // @ts-ignore
        return decoded;
    } catch (err) {
        throw new Error('Invalid access token');
    }
}


export const checkRefreshTokenAndGenerateNewAccessToken = async (refreshToken: string): Promise<tokensType> => {

    const decodedRefreshToken = await checkRefreshToken(refreshToken);

    if (!decodedRefreshToken) {
        throw new Error("Invalid refresh token");
    }

    const userRefreshToken = await prisma.userRefreshToken.findFirst({ where: { user_id: decodedRefreshToken.user_id } });
    if (!userRefreshToken) {
        throw new Error("Refresh token don't exist ");
    }


    const user = await prisma.user.findFirst({ where: { id: userRefreshToken.user_id } });
    if (!user) {
        throw new Error("User don't exist ");
    }

    const userPayload: UserPayloadType = {
        email: user.email,
        name: user.name,
        roles: user.roles,
        user_id: user.id,
        username: user.username
    };

    const accessToken = generateAccessToken(userPayload);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}