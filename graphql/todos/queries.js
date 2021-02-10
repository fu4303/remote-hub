import gql from 'graphql-tag'

export const lists = gql`
  query {
    lists {
      id
      name
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
