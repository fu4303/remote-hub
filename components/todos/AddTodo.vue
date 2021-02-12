<template>
  <div>
    <input type="text" v-model="newTodo.name" placeholder="Todo name" />
    <button
      v-on:click="addTodo"
      class="border-2 border-green-300 rounded-full px-5"
    >
      Add Todo
    </button>
  </div>
</template>

<script>
import { CreateTodo } from '@/graphql/todos/mutations'

export default {
  props: {
    list_id: Number,
  },
  data() {
    return {
      newTodo: {
        name: '',
        list_id: this.list_id,
      },
    }
  },
  methods: {
    async addTodo() {
      try {
        const { name, list_id } = this.newTodo
        if (!name || !list_id) return
        await this.$apollo.mutate({
          mutation: CreateTodo,
          variables: {
            name,
            list_id,
          },
        })
        this.newTodo = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
