import gql from 'graphql-tag'

export const CreateList = gql`
  mutation($name: String!, $project_id: uuid!) {
    insert_lists_one(object: { name: $name, project_id: $project_id }) {
      id
      name
    }
  }
`

export const CreateTodo = gql`
  mutation($name: String!, $list_id: uuid!) {
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
  mutation($id: uuid!, $isCompleted: Boolean!) {
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

export const UpdateFirstListOrder = gql`
  mutation($id: Int!, $newIndex: Int!) {
    update_lists(where: { id: { _eq: $id } }, _set: { order: $newIndex }) {
      returning {
        id
        name
        order
      }
    }
  }
`

export const UpdateSecondListOrder = gql`
  mutation($oldIndex: Int!, $newIndex: Int!) {
    update_lists(
      where: { order: { _eq: $newIndex } }
      _set: { order: $oldIndex }
    ) {
      returning {
        id
        name
        order
      }
    }
  }
`
