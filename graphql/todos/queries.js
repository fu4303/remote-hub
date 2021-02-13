import gql from 'graphql-tag'

export const comments = gql`
  query($id: uuid!) {
    comments(where: { todo: { id: { _eq: $id } } }) {
      id
      comment_body
      user {
        name
      }
    }
  }
`

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
