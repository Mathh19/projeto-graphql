import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($data: UserRegisterInput!) {
    registerUser(data: $data) {
      id
      name
      email
      profiles {
        label
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($data: UserLoginInput!) {
    loginUser(data: $data) {
      name
      email
      token
    }
  }
`;

export const NEW_USER = gql`
  mutation NewUser($data: UserInput!) {
    newUser(data: $data) {
      email
      name
      profiles {
        label
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($filter: UserFilter!, $data: UserInput!) {
    updateUser(filter: $filter, data: $data) {
      id
      email
      name
      profiles {
        id
        label
      }
    }
  }
`;
