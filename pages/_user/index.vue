<template>
  <div>
    <h1>My Awesome Company</h1>
    <h3>Projects</h3>
    <hr />
    <AddProject />
    <div v-for="project in projects" :key="project.id">
      <NuxtLink :to="`/111/projects/${project.id}`">
        <article class="">
          <h3 class="w-40 border-2 border-purple-400 rounded-lg my-4 p-4">
            {{ project.name }}
          </h3>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { projects } from '@/graphql/projects/queries'
import AddProject from '@/components/projects/AddProject'

export default {
  components: {
    AddProject,
  },
  data() {
    return {
      projects: [],
    }
  },
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: projects,
    },
  },
}
</script>
