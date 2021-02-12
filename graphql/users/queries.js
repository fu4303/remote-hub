import gql from 'graphql-tag'

export const users = gql`
  query {
    users {
      email
      id
      name
      projects
    }
  }
`
