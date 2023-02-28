module.exports = `
type User {
  id: Int
  name: String!
  email: String!
  token: String
  profiles: [Profile]
}

input UserInput {
  name: String
  email: String
  password: String
  profiles: [ProfileFilter]
}

input UserRegisterInput {
  name: String!
  email: String!
  password: String!
}

input UserLoginInput {
  email: String
  password: String
}

input UserFilter {
  id: Int
  email: String
}

type Profile {
  id: Int
  name: String!
  label: String!
  users: [User]
}

input ProfileInput {
  name: String
  label: String
}

input ProfileFilter {
  id: Int
  name: String
}

type Query {
  users: [User]
  user(filter: UserFilter!): User
  profiles: [Profile]
  profile(filter: ProfileFilter!): Profile
}

type Mutation {
  registerUser(
    data: UserRegisterInput!
  ): User!

  loginUser(data: UserLoginInput!): User

  newUser(
      data: UserInput!
  ): User!

  deleteUser(
      filter: UserFilter!
  ): User

  updateUser(
      filter: UserFilter!
      data: UserInput!
  ): User

  # Mutations de Profile
  newProfile(
      data: ProfileInput!
  ): Profile!

  deleteProfile(
      filter: ProfileFilter!
  ): Profile

  updateProfile(
      filter: ProfileFilter!
      data: ProfileInput!
  ): Profile
}
`;
