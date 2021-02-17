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

export const getProject = gql`
  query($id: uuid!) {
    projects(where: { id: { _eq: $id } }) {
      id
      name
      description
      team_members
    }
  }
`
