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

export const ToggleTodoCompleted = gql`
  mutation($id: Int!, $isCompleted: Boolean!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { isCompleted: $isCompleted }
    ) {
      returning {
        id
        isCompleted
        list_id
        name
      }
    }
  }
`
