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

export const DELETE_USER = gql`
  mutation DeleteUser($filter: UserFilter!) {
    deleteUser(filter: $filter) {
      id
      email
      name
    }
  }
`;

export const NEW_PROFILE = gql`
  mutation NewProfile($data: ProfileInput!) {
    newProfile(data: $data) {
      id
      name
      label
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($filter: ProfileFilter!, $data: ProfileInput!) {
    updateProfile(filter: $filter, data: $data) {
      id
      name
      label
      users {
        id
        name
        email
      }
    }
  }
`;

export const DELETE_PROFILE = gql`
  mutation DeleteProfile($filter: ProfileFilter!) {
    deleteProfile(filter: $filter) {
      id
      name
      label
    }
  }
`;
