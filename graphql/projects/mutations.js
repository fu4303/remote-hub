import gql from 'graphql-tag'

export const CreateProject = gql`
  mutation($name: String!) {
    insert_projects_one(object: { name: $name }) {
      id
      name
    }
  }
`
