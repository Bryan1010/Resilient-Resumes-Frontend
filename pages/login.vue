<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12" @keydown.enter="postLogin">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer />
                  <v-tooltip bottom>
                    <v-btn
                      slot="activator"
                      icon
                      large
                      target="_blank"
                      @click="postLogin"
                    >
                      <v-icon large>
                        code
                      </v-icon>
                    </v-btn>
                    <span>Source</span>
                  </v-tooltip>
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
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Please provide a password',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ],
      loading: false

    }
  },
  methods: {
    async postLogin() {
      if (this.$refs.form.validate()) {
        const token = await this.$axios.post('/api/user/login', {
          Email: this.Email,
          Password: this.Password
        })

        if (token.status >= 200 && token.status < 300 &&
          token.data.status === 'success') {
        //   const FirstName = token.data.FName
        //   // const LastName = token.data.LName
        //   const email = token.data.email
        //   const id = token.data.userId
        //   const gravatar = token.data.gravatar

          this.$store.commit('login/setRRAuth', token.data)

          Cookie.set('auth', token.data.userId)
          // eslint-disable-next-line no-console
          console.log(token.data.LName)
          // const auth = {
          //   accessToken: token
          // }
          // this.$store.commit('login/setAuth', auth) // mutating to store for client rendering
          // Cookie.set('auth', auth) // saving token in cookie for server rendering
          this.$router.push('/dashboard')
          // eslint-disable-next-line no-console
          console.log('authenticated')
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('nope')
      }
    }
  }
}
</script>
