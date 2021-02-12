<template>
  <section class="">
    <h3 class="text-xl mb-4 border-b">Projects</h3>
    <AddProject />
    <div v-for="project in projects" :key="project.id">
      <NuxtLink :to="`/${$route.params.user}/projects/${project.id}`">
        <h3 class="w-40 border-2 border-purple-400 rounded-lg my-4 p-4">
          {{ project.name }}
        </h3>
      </NuxtLink>
    </div>
  </section>
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
