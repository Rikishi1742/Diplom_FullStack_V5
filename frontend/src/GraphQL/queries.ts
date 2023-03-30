import { gql } from '@apollo/client';

export const GET_USERS = gql`
query GetUsers {
    users {
      email,
      id,
      name,
      username,
      password {
        initialPassword,
        password
      }
    }
  }
`