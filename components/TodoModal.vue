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
    <hr />
    <AddComment :todo_id="todo.id" />
    <section>
      <h3 class="text-xl mb-4 border-b">Comments</h3>
      <table v-for="comment in comments" :key="comment.id">
        <tr>
          <td>{{ comment.comment_body }}</td>
          <td>by: {{ comment.user.name }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { UpdateTodo } from '@/graphql/todos/mutations'
import { comments } from '@/graphql/todos/queries'

export default {
  props: ['todo'],
  data() {
    return {
      todoEdited: {},
    }
  },
  apollo: {
    comments: {
      query: comments,
      loadingKey: 'loading',
      variables() {
        return {
          id: this.todoEdited.id,
        }
      },
      // Disable the query on load since id variable is not ready,
      // re enabled with watcher below
      skip() {
        return this.skipQuery
      },
    },
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
      // re enable apollo query to fetch comments
      this.$apollo.queries.comments.skip = false
    },
  },
}
</script>
