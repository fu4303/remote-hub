<template>
  <div>
    <input type="text" v-model="newList.name" placeholder="List name" />
    <button
      v-on:click="addList"
      class="border-2 border-green-300 rounded-full px-5"
    >
      Add List
    </button>
  </div>
</template>

<script>
import { CreateList } from '@/graphql/todos/mutations'

export default {
  // props: {
  //   list_id: Number,
  // },
  data() {
    return {
      newList: {
        name: '',
      },
    }
  },
  methods: {
    async addList() {
      try {
        const { name } = this.newList
        if (!name) return
        await this.$apollo.mutate({
          mutation: CreateList,
          variables: {
            name,
          },
        })
        this.newList = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
