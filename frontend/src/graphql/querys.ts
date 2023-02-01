import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      id
      name
      email
      profiles {
        name
      }
    }
  }
`;

export const GET_PROFILES = gql`
  query Profiles {
    profiles {
      id
      name
      label
    }
  }
`;
