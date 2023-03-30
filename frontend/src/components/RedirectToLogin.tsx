import React, { useCallback, useContext, useEffect } from 'react'

import { UserContext, LoginStatus } from '../context/UserContext';
import { getTokens, saveTokens, decodeToken } from '../manage-tokens';

import { useNavigate, Routes, Route } from 'react-router-dom';
import { CHECK_REFRESH_TOKEN_AND_GENERATE_NEW_ACCESS_TOKEN } from '../GraphQL/mutation';
import { useMutation } from '@apollo/client';
import LoginPage from '../pages/Login/LoginPage';

import { CSpinner, CContainer } from '@coreui/react';


type Props = {
    children?: React.ReactNode
}

function RedirectToLogin({ children }: Props) {

    const navigate = useNavigate();

    const { userPayload, loginStatus, setUserDataByDispatch } = useContext(UserContext);

    const [checkRefreshTokenAndGenerateNewAccessToken] = useMutation(
        CHECK_REFRESH_TOKEN_AND_GENERATE_NEW_ACCESS_TOKEN
    );

    const login = useCallback((tokens) => {
        const decodedUser = decodeToken(tokens.accessToken);
        console.log('LOGIN: decoded', decodedUser, loginStatus);
        setUserDataByDispatch('LOGIN', decodedUser);
        saveTokens(tokens);
    }, [setUserDataByDispatch]);

    const logout = useCallback(() => {
        setUserDataByDispatch('LOGOUT', null);
        navigate('/login');
    }, [setUserDataByDispatch]);

    const GetAndRefreshTokensIfNeeded = useCallback(() => {
        let tokens = getTokens();
        console.log('getTokens', tokens);

        if (tokens.refreshToken) {
            if (tokens.accessToken) login(tokens);
            else
                checkRefreshTokenAndGenerateNewAccessToken()
                    .then(() => {
                        tokens = getTokens();
                        login(tokens);
                    })
                    .catch(() => logout());
        } else logout();
    }, [checkRefreshTokenAndGenerateNewAccessToken, logout, login]);


    useEffect(() => {
        if (!userPayload) {
            console.log('NO USER');
            GetAndRefreshTokensIfNeeded();
        }
    }, [userPayload, GetAndRefreshTokensIfNeeded]);

    return (
        <>
            {loginStatus === LoginStatus.LoggedIn && children}
            {loginStatus === LoginStatus.Waiting && (
                <CContainer>
                    <CSpinner color="primary" />
                </CContainer>
            )}
            {loginStatus === LoginStatus.LoggedOut && (
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            )}


        </>
    )
}

export default RedirectToLogin