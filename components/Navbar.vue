<template>
  <nav>
    <v-toolbar extended flat class="transparent" app>
      <img class="mt-5" src="~/assets/ResilientResumes.png" height="85">

      <v-spacer />
      <!-- <v-layout align-end justify-start column fill-height> -->
      <v-toolbar-items v-if="!isLoggedIn">
        <!-- <v-flex class="mt-3"> -->
        <v-btn
          to="/login"
        >
          Login
        </v-btn>
        <v-btn
          text
          to="/createAccount"
        >
          SignUp
        </v-btn>
        <!-- </v-flex> -->
      </v-toolbar-items>

      <v-toolbar-items v-else>
        <!-- <v-flex class="mt-3"> -->
        <v-btn
          @click="logout"
        >
          Logout
        </v-btn>

        <v-btn
          text
          to="/dashboard"
        >
          Dashboard
        </v-btn>
        <!-- </v-flex> -->
      </v-toolbar-items>
      <!-- </v-layout> -->
    </v-toolbar>
  </nav>
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
