<template>
  <div>
    <v-container>
      <v-layout align-start justify-start column fill-height>
        <v-flex lg12 md8 xs5>
          <h1 class="display-4 font-weight-thin white--text">
            Welcome
          </h1>
          <br>
        </v-flex>
      </v-layout>
      <v-spacer />
      <v-spacer />
      <v-layout align-center justify-center column>
        <v-spacer />
        <v-flex lg12 md8 xs5>
          <p class="headline white--text  ">
            <br>
            Resilient Resumes is an application designed to help you create your resume.
            <br>
            As you navigate through, you will receive ideas and inspiration to help you create a Resilient Resume.
            <br>
            Once input is complete, you will receive customize feedback based on your input upon submission.
            <br>
            With this feedback you can refine your information for the most Resilient Resume possible.
          </p>
          <template v-if="!isLoggedIn">
            <p class="headline">
              Click start to Create an Account.
            </p>
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
            <p class="headline">
              Click Here to go to the dashboard and get started
            </p>
            <v-btn
              class="mr-5"
              text
              outline
              to="/dashboard"
            >
              Dashboard
            </v-btn>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import Login from '../components/Login'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'home',
  components: {
    // Login,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.state.login.auth !== '' && this.$store.state.login.auth !== null
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
#app > div{
    background-color: #093162;
 }
</style>
