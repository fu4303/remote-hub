<template>
  <div>
    <h3>Manage members</h3>
    <AddUser />

    <div v-if="!$apollo.queries.users.loading">
      <table v-for="user in users" :key="user.id">
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </div>
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
        }
      },
    },
  },
}
</script>
