import gql from 'graphql-tag'

export const CreateUser = gql`
  mutation($email: String!, $name: String!, $accounts: uuid) {
    insert_users_one(
      object: { email: $email, name: $name, accounts: $accounts }
    ) {
      email
      id
      name
    }
  }
`
