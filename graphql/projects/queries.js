import gql from 'graphql-tag'

export const projects = gql`
  query {
    projects {
      description
      id
      name
    }
  }
`
