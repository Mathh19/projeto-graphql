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

export const GET_USER = gql`
  query User($filter: UserFilter!) {
    user(filter: $filter) {
      id
      name
      email
      profiles {
        id
        label
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
export const GET_PROFILE = gql`
  query Profile($filter: ProfileFilter!) {
    profile(filter: $filter) {
      id
      name
      label
      users {
        id
        email
        name
      }
    }
  }
`;
