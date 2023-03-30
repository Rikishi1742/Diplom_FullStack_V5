
import jwt_decode from 'jwt-decode';

type TokensType = {
    refreshToken: string,
    accessToken: string
}

export function saveTokens(tokens: TokensType) {
    const { accessToken, refreshToken } = tokens;
    console.log("saveTokens", tokens);
    localStorage.setItem('refreshToken', refreshToken);
    sessionStorage.setItem('accessToken', accessToken);
}

export function getTokens(): TokensType {
    const accessToken = sessionStorage.getItem('accessToken') || null;
    const refreshToken = localStorage.getItem('refreshToken') || null;

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
}

export function deleteTokens() {
    localStorage.clear();
    sessionStorage.clear();
}

export const decodeToken = (token) => {
    return jwt_decode(token);
  };
