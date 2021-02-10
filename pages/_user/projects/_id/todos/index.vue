<template>
  <div>
    <h1>Project Name</h1>
    <article>
      <h3>Todo's:</h3>
      <div v-for="list in lists" :key="list.id">
        <h2>{{ list.name }}</h2>
        <hr />
        <div v-for="todo in list.todosByListId" :key="todo.id">
          {{ todo }}
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { lists } from '@/graphql/todos/queries'

export default {
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
