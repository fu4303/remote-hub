import gql from 'graphql-tag'

export const getAccount = gql`
  query($id: uuid!) {
    accounts(where: { id: { _eq: $id } }) {
      id
      name
    }
  }
`

export const getAccountUsers = gql`
  query($id: uuid!, $limit: Int) {
    users(where: { account: { id: { _eq: $id } } }, limit: $limit) {
      email
      id
      name
    }
  }
`

// export const users = gql`
//   query {
//     users {
//       email
//       id
//       name
//       projects
//     }
//   }
// `
