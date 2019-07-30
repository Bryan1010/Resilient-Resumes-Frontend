<template>
  <v-toolbar class="primary" app>
    <img src="~/assets/ResilientResumes.png" width="130px">

    <v-spacer />

    <v-toolbar-items>
      <template v-if="!isLoggedIn">
        <v-btn
          class="mr-5"
          text
          outline
          to="/login"
        >
          Login
        </v-btn>
        <v-btn
          outline
          text
          to="/createAccount"
        >
          SignUp
        </v-btn>
      </template>
      <template v-else>
        <v-btn
          class="mr-5"
          outline
          text
          @click="logout"
        >
          Logout
        </v-btn>

        <v-btn
          outline
          text
          to="/dashboard"
        >
          Dashboard
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// import Login from './Login'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    // Login
  },
  data() {
    return {

    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.state.login.auth !== '' && this.$store.state.login.auth !== null
    }
  },
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('login/setRRAuth', null)
    }
  }
}
</script>
<style>
.v-text-field {
    color:white;
 }
 </style>
