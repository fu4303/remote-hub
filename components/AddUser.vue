<template>
  <div>
    <input type="text" v-model="newUser.name" placeholder="User name" />
    <input type="email" v-model="newUser.email" placeholder="Email" />
    <button
      v-on:click="addUser"
      class="border-2 border-purple-300 rounded-full px-5"
    >
      Add User
    </button>
  </div>
</template>

<script>
import { CreateUser } from '@/graphql/users/mutations'

export default {
  data() {
    return {
      newUser: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    async addUser() {
      try {
        const { name, email } = this.newUser
        if (!name || !email) return
        await this.$apollo.mutate({
          mutation: CreateUser,
          variables: {
            name,
            email,
            accounts: '3d930dbc-4af6-40f4-996b-6fab9ecd6c4c',
          },
        })
        this.newUser = {}
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
