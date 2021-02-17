<template>
  <div v-if="!$apollo.queries.projects.loading">
    <h1 class="text-3xl">{{ projects.name }}</h1>
    <NuxtLink :to="`${$route.path}/todos`">
      <article>
        <h3>Todo's</h3>
      </article>
    </NuxtLink>
    <article>
      <h3>Chat</h3>
    </article>
  </div>
</template>

<script>
import { getProject } from '@/graphql/projects/queries'

export default {
  data() {
    return {}
  },
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: getProject,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
      update: (data) => data.projects[0],
    },
  },
}
</script>
