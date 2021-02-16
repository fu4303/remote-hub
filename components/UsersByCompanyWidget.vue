<template>
  <section class="">
    <h3 class="text-xl mb-4 border-b">My Team</h3>
    <nuxt-link
      :to="`${$route.path}/members`"
      class="border-2 border-green-300 rounded-full px-5"
      >manage</nuxt-link
    >
    <!-- for overview page, limit number of users to 5/10? -->
    <div v-if="!$apollo.queries.users.loading">
      <table v-for="user in users" :key="user.id">
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import { getAccountUsers } from '@/graphql/users/queries'

export default {
  data() {
    return {}
  },
  apollo: {
    $loadingKey: 'loading',
    users: {
      query: getAccountUsers,
      variables() {
        return {
          id: '3d930dbc-4af6-40f4-996b-6fab9ecd6c4c',
          limit: 5,
        }
      },
    },
  },
}
</script>
