<template>
  <section class="">
    <h3 class="text-xl mb-4 border-b">All Members</h3>
    <table v-for="user in users" :key="user.id">
      <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import { users } from '@/graphql/users/queries'

export default {
  data() {
    return {
      users: [],
    }
  },
  apollo: {
    $loadingKey: 'loading',
    users: {
      query: users,
    },
  },
}
</script>
