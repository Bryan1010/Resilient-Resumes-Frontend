<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" large outline color="secondary">
      <span>Login</span>
    </v-btn>

    <v-card @keydown.enter="postLogin">
      <v-card-title>
        <h2>Enter your Login Information</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="px-3">
          <v-text-field v-model="Email" label="Email" :rules="emailRules" prepend-icon="email" />
          <v-text-field
            v-model="Password"
            label="Password"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRules"
            prepend-icon="vpn_key"
            @click:append="showPassword = !showPassword"
          />

          <v-spacer />

          <v-btn flat class="primary mx-0 mt-3" @click="postLogin">
            Submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
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
        // eslint-disable-next-line no-console
        const token = await this.$axios.post('/api/user/login', {
          Email: this.Email,
          Password: this.Password
        })
        // eslint-disable-next-line no-console
        console.log(token)
        setTimeout(() => { // we simulate the async request with timeout.
          const auth = {
            accessToken: token
          }
          this.$store.commit('login/setAuth', auth) // mutating to store for client rendering
          Cookie.set('auth', auth) // saving token in cookie for server rendering
          this.$router.push('/')
        }, 1000)
      // eslint-disable-next-line brace-style
      }
      // eslint-disable-next-line no-console
      else { console.log('nope') }
    }
  }
}
</script>
