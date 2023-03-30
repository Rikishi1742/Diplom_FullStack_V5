import { Context } from "apollo-server-core";
import logger from "../logger";
import { Arg, ArgsType, Ctx, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql";
import { prisma } from "../prismaInit";
import { generateJWT, isPasswordValid, UserPayloadType } from "./authHelper";

import { UserInputError } from "apollo-server";

@InputType()
class UserAuthenticationInputType {
    @Field(type => String, { nullable: false })
    username: string;

    @Field(type => String, { nullable: false })
    password: string
}


@InputType()
class UserRegisterInputType {
    @Field(type => String, { nullable: false })
    username: string;

    @Field(type => String, { nullable: false })
    password: string

    @Field(type => String, { nullable: false })
    email: string

    @Field(type => String, { nullable: false })
    name: string

}


@ObjectType()
class UserAuthenticationOutputType {
    @Field(type => String, { nullable: false })
    accessToken: String;

    @Field(type => String, { nullable: false })
    refreshToken: String;
}


@ObjectType()
class UserCheckRefreshTokenAndGenerateNewAccessTokenOutputType {
    @Field(type => Boolean, { nullable: false })
    Ok: Boolean;
}

@Resolver()
class Authentication {

    @Mutation(() => UserCheckRefreshTokenAndGenerateNewAccessTokenOutputType)
    checkRefreshTokenAndGenerateNewAccessToken(): UserCheckRefreshTokenAndGenerateNewAccessTokenOutputType {
        return {
            Ok: true
        };
    };

    @Mutation(() => UserAuthenticationOutputType)
    async UserSignUp(@Arg("UserRegisterData") input: UserRegisterInputType): Promise<UserAuthenticationOutputType> {

        logger.info(`User Registration ${JSON.stringify(input)}`);

        const newUser = await prisma.user.create({
            data: {
                email: input.email,
                username: input.username,
                name: input.name,
                password: {
                    initialPassword: false,
                    password: input.password
                }
            }
        });

        if (!newUser){
            throw new Error("Error create new user");
        }

        const userPayload: UserPayloadType = {
            user_id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            roles: newUser.roles,
            username: newUser.username
        };
        const tokens = await generateJWT(userPayload);

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };
        
    };

    @Mutation(() => UserAuthenticationOutputType)
    async UserSignIn(@Arg("UserPayLoad") input: UserAuthenticationInputType): Promise<UserAuthenticationOutputType> {

        logger.info(`User Authentication username:${input.username}, password:${input.password}`);

        const user = await prisma.user.findFirstOrThrow({
            where: {
                username: input.username
            }
        });

        const isValid = await isPasswordValid(input.password, user.password.password);

        if (!isValid) {
            throw new UserInputError("Password not match!");
        }

        logger.info(`User Authentication isValid:${isValid}`);

        const userPayload: UserPayloadType = {
            user_id: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles,
            username: user.username
        };
        const tokens = await generateJWT(userPayload);

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };

    }
}

export default Authentication