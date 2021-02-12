import gql from 'graphql-tag'

export const lists = gql`
  query {
    lists(order_by: { order: asc }) {
      id
      name
      order
      todosByListId {
        name
        id
        isCompleted
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
