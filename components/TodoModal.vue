<template>
  <div class="bg-purple-300 p-12">
    <p>todo modal</p>
    <input
      type="checkbox"
      :checked="todoEdited.isCompleted"
      @change="todoEdited.isCompleted = !todoEdited.isCompleted"
    />
    <input type="text" v-model="todoEdited.name" class="mb-2" />
    <label for="comment">Comment:</label>
    <button
      @click="updateTodo"
      class="border-2 border-green-300 rounded-full px-5"
    >
      Save changes
    </button>
  </div>
</template>

<script>
import { UpdateTodo } from '@/graphql/todos/mutations'

export default {
  props: ['todo'],
  data() {
    return {
      todoEdited: {},
    }
  },
  methods: {
    async updateTodo() {
      try {
        const { id, name, isCompleted } = this.todoEdited
        if ((!id, !name, !isCompleted)) return
        await this.$apollo.mutate({
          mutation: UpdateTodo,
          variables: {
            id,
            name,
            isCompleted,
          },
        })
        this.newList = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
  watch: {
    todo() {
      // take copy of initial props
      this.todoEdited = { ...this.todo }
    },
  },
}
</script>
