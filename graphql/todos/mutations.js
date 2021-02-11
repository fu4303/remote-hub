import gql from 'graphql-tag'

export const CreateTodo = gql`
  mutation($name: String!, $list_id: Int!) {
    insert_todos(
      objects: { name: $name, list_id: $list_id, isCompleted: false }
    ) {
      returning {
        name
        id
        isCompleted
      }
    }
  }
`
