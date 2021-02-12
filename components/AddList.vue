<template>
  <div>
    <input type="text" v-model="newList.name" placeholder="List name" />
    <button
      v-on:click="addList"
      class="border-2 border-purple-300 rounded-full px-5"
    >
      Add List
    </button>
  </div>
</template>

<script>
import { CreateList } from '@/graphql/todos/mutations'

export default {
  data() {
    return {
      newList: {
        name: '',
        project_id: this.$route.params.id,
      },
    }
  },
  methods: {
    async addList() {
      try {
        const { name, project_id } = this.newList
        if (!name || !project_id) return
        await this.$apollo.mutate({
          mutation: CreateList,
          variables: {
            name,
            project_id,
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
