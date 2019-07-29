<template dark="false">
  <div id="profile">
    <v-card light @keydown.enter="postCreateAccount">
      <v-container>
        <v-layout align-start justify-end column fill-height>
          <h1 class="px-5 primary--text">
            Let's Start
          </h1>
          <h4 class=" px-5 primary--text">
            A resume is a snapshot of who you are and what you can bring to the table.
          </H4>
          <h4 class="px-5 tertiary--text">
            Start by completing a profile with your information.
          </h4>
        </v-layout>

        <v-card-text>
          <v-form id="form" ref="form" class="px-5">
            <v-layout align-start justify-start row fill-height>
              <v-text-field
                v-model="fname"
                label="First Name"
                name="fname"
                prepend-icon="person_pin"
                :rules="inputRules"
              />
              <v-text-field
                v-model="lname"
                label="Last Name"
                name="lname"

                :rules="inputRules"
              />
              <v-text-field
                v-model="suffix"
                label="Suffix"
                name="suffix"
              />
            </v-layout>
            <v-text-field
              v-model="email"
              label="Email"
              prepend-icon="email"
              :rules="emailRules"
            />
            <v-text-field
              v-model="line1"
              label="Address Line 1"
              name="address"
              prepend-icon="home"
              type="street"
              :rules="inputRules"
            />
            <v-text-field
              v-model="line2"
              label="Address Line 2"
              name="address2"
              prepend-icon="home"
            />
            <v-text-field v-model="city" label="City" name="city" :rules="inputRules" />
            <v-layout align-start justify-start row fill-height>
              <v-text-field v-model="state" label="State" name="state" />
              <v-text-field v-model="zip" label="Zip" name="zip" :rules="inputRules" />
            </v-layout>
            <v-text-field v-model="phone" label="Phone" name="phone" prepend-icon="phone" :rules="inputRules" />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-text-field v-model="LinkedInLink" label="LinkedIn Profile" name="website1" v-on="on" />
              </template>
              <span>It is highly recommended to include a LinkedIn Profile or personal professional websites.</span>
            </v-tooltip>
            <v-text-field v-model="PersonalSite" label="Portfolio Site" name="website2" />
            <!-- <v-text-field v-model="site3" label="Project Site" name="website3" /> -->
            <v-layout align-start justify-start row fill-height>
              <!--Possible way to set passord

                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                :append-icon="value ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (value = !value)"
                value="Password"
                :rules="[() => ('The email and password you entered don\'t match')]"
                error
                :type="value ? 'password' : 'text'"
                >-->

              <v-text-field
                v-model="password"
                label="Set Password"
                prepend-icon="lock_open"
                :rules="passwordRules"
              />
              <v-text-field
                v-model="password1"
                label="Confirm Password"
                prepend-icon="lock"
                :rules="passwordMatchRules"
              />
            </v-layout>
            <v-spacer />

            <v-btn
              flat
              class="primary mx-0 mt-3"
              @click="postCreateAccount"
            >
              Create Profile
            </v-btn>
          </v-form>
        </v-card-text>
      </v-container>
    </v-card>
  </div>
</template>
<style>
template{
  overflow: hidden !important;
}
</style>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data() {
    return {
      title: '',
      content: '',
      line1: '',
      line2: '',
      email: '',
      phone: '',
      LinkedInLink: '',
      PersonalSite: '',
      site3: '',
      fname: '',
      lname: '',
      suffix: '',
      password: '',
      password1: '',
      city: '',
      state: '',
      zip: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Please provide a password',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ],
      passwordMatchRules: [
        v => !!v || 'Please type your password again',
        v => v === this.password || 'Your passwords do not match'
      ],
      inputRules: [v => v.length >= 3 || 'Minimum Length is 3 characters'],
      loading: false
    }
  },
  methods: {
    async postCreateAccount() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const token = await this.$axios.post('/api/user/register', {
          Email: this.email,
          Password: this.password,
          FName: this.fname,
          LName: this.lname,
          Suffix: this.suffix,
          Phone: this.phone,
          Address: {
            Line1: this.line1,
            Line2: this.line2,
            City: this.city,
            State: this.state,
            Zip: this.zip,
            Country: this.Country
          },
          LinkedIn: this.LinkedInLink,
          PersonalSite: this.PersonalSite

        })

        if (token.status >= 200 && token.status < 300) {
          if (token.data.status === 'success') {
            this.$store.commit('login/setRRAuth', token.data)

            Cookie.set('auth', token.data.userId)
            this.$router.push('/dashboard/')
          } else if (token.data.status === 'fail') {
            this.errorMessage = token.data.message
          }
        }

        this.loading = false
      }
    }
  }
}
</script>
