<template>
  <section>
    <textarea
      class="mt-2"
      id="comment"
      cols="30"
      rows="3"
      v-model="newComment.comment_body"
    ></textarea>
    <button
      @click="addComment"
      class="border-2 border-green-300 rounded-full px-5"
    >
      Add comment
    </button>
  </section>
</template>

<script>
import { CreateComment } from '@/graphql/todos/mutations'

export default {
  props: {
    todo_id: String,
  },
  data() {
    return {
      newComment: {
        // change to dynamic value when users set up properly
        by_user: '2e23a322-926b-4f18-a633-91574cd63b78',
        belongs_to: '',
        comment_body: '',
      },
    }
  },
  methods: {
    async addComment() {
      try {
        const { by_user, belongs_to, comment_body } = this.newComment
        if (!by_user || !belongs_to || !comment_body) return
        await this.$apollo.mutate({
          mutation: CreateComment,
          variables: {
            by_user,
            belongs_to,
            comment_body,
          },
        })
        this.newComment = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
  watch: {
    todo_id() {
      // take copy of initial props
      this.newComment.belongs_to = this.todo_id
    },
  },
}
</script>
