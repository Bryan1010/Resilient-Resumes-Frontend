<template>
  <nav>
    <v-toolbar extended flat class="transparent" app>
      <img class="mt-5" src="~/assets/ResilientResumes.png" height="85">

      <v-spacer />
      <v-layout align-end justify-start column fill-height>
        <v-flex class="mt-3">
          <nuxt-link to="/login">
            <span>Login</span>
          </nuxt-link>
        </v-flex>
      </v-layout>
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
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  }
}
</script>
<style>
.v-text-field {
    color:white;
 }
 </style>
