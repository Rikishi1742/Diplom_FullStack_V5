import { gql } from '@apollo/client';

export const CHECK_REFRESH_TOKEN_AND_GENERATE_NEW_ACCESS_TOKEN = gql`
  mutation CHECK_REFRESH_TOKEN_AND_GENERATE_NEW_ACCESS_TOKEN{
    checkRefreshTokenAndGenerateNewAccessToken{
      Ok
    }
  }
`;

export const USER_SIGN_IN = gql`
mutation UserSignIn($userPayLoad: UserAuthenticationInputType!){
  UserSignIn(UserPayLoad: $userPayLoad) {
    accessToken,
    refreshToken
  }
}`;


export const USER_SIGN_UP = gql`
mutation Register($userRegisterData: UserRegisterInputType!){
  UserSignUp(UserRegisterData: $userRegisterData) {
    accessToken,
    refreshToken
  }
}`;



