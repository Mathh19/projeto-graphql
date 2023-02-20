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
