import React, { createContext, useCallback, useReducer } from "react";

export enum LoginStatus {
    LoggedIn = 0,
    Waiting = 1,
    LoggedOut = 2
};

export type UserPayloadType = {
    user_id: string
    username: string
    email: string
    name: string
    roles: string[]
};


type userContextType = {
    userPayload: UserPayloadType | null,
    loginStatus: LoginStatus,
    setUserDataByDispatch?: (actionType: any, userPayload: any) => void
};

export const UserContext = createContext<userContextType>({
    userPayload: null,
    loginStatus: LoginStatus.Waiting
});


function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userPayload: action.userPayload,
                loginStatus: LoginStatus.LoggedIn
            };
        case 'LOGOUT':
            return {
                ...state,
                userPayload: null,
                loginStatus: LoginStatus.LoggedOut
            };
        case 'WAITING':
            return {
                ...state,
                userPayload: null,
                loginStatus: LoginStatus.Waiting
            }
        default:
            return state;
    }
}

type Props = {
    children?: React.ReactNode
}

const initialState: userContextType = {
    userPayload: null,
    loginStatus: LoginStatus.Waiting
};


export function UserProvider({ children }: Props) {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const setUserDataByDispatch = useCallback((actionType, userPayload) => {
        dispatch({
            type: actionType,
            userPayload: userPayload
        });
    }, []);

    return (
        <UserContext.Provider value={{ userPayload: state.userPayload, loginStatus: state.loginStatus, setUserDataByDispatch }}>
            {children}
        </UserContext.Provider>
    )
}
