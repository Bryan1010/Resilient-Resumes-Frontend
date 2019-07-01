<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" large outline color="secondary">
      <span>Login</span>
    </v-btn>

    <v-card>
      <v-card-title>
        <h2>Enter your Login Information</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="px-3">
          <v-text-field v-model="email" label="Email" prepend-icon="email" />
          <v-text-field v-model="password" label="Password" prepend-icon="vpn_key" />

          <v-spacer />

          <v-btn flat class="primary mx-0 mt-3" router to="/welcome">
            Submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      inputRules: [v => v.length >= 3 || 'Minimum Length is 3 characters'],
      loading: false

    }
  },
  methods: {}
}
</script>
