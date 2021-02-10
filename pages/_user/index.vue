<template>
  <div>
    <h1>My Awesome Company</h1>
    <h3>Projects</h3>
    <hr />
    <div v-for="project in projects" :key="project.id">
      <NuxtLink :to="`projects/${project.id}`">
        <h3>{{ project.name }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { projects } from '@/graphql/projects/queries'

export default {
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
