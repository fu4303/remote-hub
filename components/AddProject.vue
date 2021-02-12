<template>
  <div>
    <input type="text" v-model="newProject.name" placeholder="Project name" />
    <button
      v-on:click="addProject"
      class="border-2 border-green-300 rounded-full px-5"
    >
      Add Project
    </button>
  </div>
</template>

<script>
import { CreateProject } from '@/graphql/projects/mutations'

export default {
  props: {
    list_id: Number,
  },
  data() {
    return {
      newProject: {
        name: '',
      },
    }
  },
  methods: {
    async addProject() {
      try {
        const { name } = this.newProject
        if (!name) return
        await this.$apollo.mutate({
          mutation: CreateProject,
          variables: {
            name,
          },
        })
        this.newProject = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
