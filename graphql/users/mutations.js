import gql from 'graphql-tag'

export const CreateUser = gql`
  mutation($email: String!, $name: String!) {
    insert_users_one(object: { email: $email, name: $name }) {
      email
      id
      name
    }
  }
`
