<template>
  <div>
    <h1 v-if="!$apollo.queries.accounts.loading" class="text-2xl border-b mb-8">
      {{ accounts.name }}
    </h1>
    <AllProjects />
    <UsersByCompanyWidget />
  </div>
</template>

<script>
import { getAccount } from '@/graphql/users/queries'

export default {
  data() {
    return {}
  },
  apollo: {
    $loadingKey: 'loading',
    accounts: {
      query: getAccount,
      variables() {
        return {
          id: '3d930dbc-4af6-40f4-996b-6fab9ecd6c4c',
        }
      },
      //   https://github.com/vuejs/vue-apollo/issues/935
      update: (data) => data.accounts[0],
    },
  },
}
</script>
