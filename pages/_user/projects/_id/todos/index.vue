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
          <input type="checkbox" :checked="todo.isCompleted" />
          <span>{{ todo.name }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { lists } from '@/graphql/todos/queries'
import AddTodo from '@/components/todos/AddTodo'

export default {
  components: {
    AddTodo,
  },
  data() {
    return {
      lists: [],
    }
  },

  apollo: {
    $loadingKey: 'loading',
    lists: {
      query: lists,
    },
  },
}
</script>
