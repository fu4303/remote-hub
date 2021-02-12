import gql from 'graphql-tag'

export const lists = gql`
  query($id: uuid!) {
    lists(where: { project_id: { _eq: $id } }, order_by: { order: asc }) {
      id
      name
      order
      project_id
      todosByListId {
        id
        isCompleted
        name
      }
    }
  }
`
export const todos = gql`
  query {
    todos {
      id
      name
    }
  }
`
