<template>
  <div>
    <h1>Project Name</h1>
    <article>
      <h3>Todo's:</h3>
      <div v-for="list in lists" :key="list.id">
        <h2 class="pt-6">{{ list.name }}</h2>
        <hr />
        <AddTodo :list_id="list.id" />
        <div v-for="todo in list.todosByListId" :key="todo.id">
          <input
            type="checkbox"
            :checked="todo.isCompleted"
            @change="ToggleTodoCompleted(todo.id, !todo.isCompleted)"
          />
          <span>{{ todo.name }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import AddTodo from '@/components/todos/AddTodo'
import { lists } from '@/graphql/todos/queries'
import { ToggleTodoCompleted } from '@/graphql/todos/mutations'

export default {
  components: {
    AddTodo,
  },
  data() {
    return {
      lists: [],
    }
  },
  methods: {
    async ToggleTodoCompleted(todoId, isCompleted) {
      try {
        if (!todoId) return
        await this.$apollo.mutate({
          mutation: ToggleTodoCompleted,
          variables: {
            id: todoId,
            isCompleted,
          },
        })
      } catch (error) {
        throw new Error(error)
      }
    },
  },
  apollo: {
    $loadingKey: 'loading',
    lists: {
      query: lists,
    },
  },
}
</script>
