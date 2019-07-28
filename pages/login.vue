<template>
  <div id="app">
    <v-app id="inspire">
      <v-alert
        v-if="loginIncorrect"
        type="error"
        :value="errorMessage"
      >
        {{ errorMessage }}
      </v-alert>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card light class="elevation-12" @keydown.enter="postLogin">
                <v-toolbar color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field
                      v-model="Email"
                      label="Email"
                      :rules="emailRules"
                      prepend-icon="person"
                    />
                    <v-text-field
                      id="password"
                      v-model="Password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                      :rules="passwordRules"
                      @click:append="showPassword = !showPassword"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    to="createAccount"
                  >
                    Signup
                  </v-btn>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    @click="postLogin"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  // middleware: 'notAuthenticated',

  data() {
    return {
      Email: '',
      Password: '',
      showPassword: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Please provide a password',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ],
      loading: false,
      errorMessage: ''

    }
  },
  computed: {
    loginIncorrect: function () {
      return this.errorMessage.length > 0
    }
  },
  methods: {
    async postLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const token = await this.$axios.post('/api/user/login', {
          Email: this.Email,
          Password: this.Password
        })

        if (token.status >= 200 && token.status < 300) {
          if (token.data.status === 'success') {
            this.$store.commit('login/setRRAuth', token.data)

            Cookie.set('auth', token.data.userId)
            // eslint-disable-next-line no-console
            console.log(token.data.LName)
            this.$router.push('/dashboard/')
          } else if (token.data.status === 'fail') {
            // eslint-disable-next-line no-console
            console.log(token.data.message)
            this.errorMessage = token.data.message
          }
          this.loading = false
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('nope')
      }
    }
  }
}
</script>

<style>
.v-alert .v-alert__icon.v-icon, .v-alert__dismissible .v-icon{
    color:#fff;
}
</style>
