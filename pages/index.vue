<template>
  <div>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret">
          secret page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
    </p>
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: { Login },
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  }
}
</script>
