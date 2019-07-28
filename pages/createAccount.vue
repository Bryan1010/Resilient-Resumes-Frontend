<template dark="false">
  <div id="profile">
    <v-card light>
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
            </v-layout>
            <v-text-field v-model="email" label="Email" prepend-icon="email" />
            <v-text-field
              v-model="address"
              label="Street Address"
              name="address"
              prepend-icon="home"
              :rules="inputRules"
            />
            <v-text-field v-model="city" label="City" name="city" :rules="inputRules" />
            <v-layout align-start justify-start row fill-height>
              <v-text-field v-model="state" label="State" name="state" />
              <v-text-field v-model="zip" label="Zip" name="zip" :rules="inputRules" />
            </v-layout>
            <v-text-field v-model="phone" label="Phone" name="phone" prepend-icon="phone" :rules="inputRules" />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-text-field v-model="site1" label="LinkedIn Profile" name="website1" v-on="on" />
              </template>
              <span>It is highly recommended to include a LinkedIn Profile or personal professional websites.</span>
            </v-tooltip>
            <v-text-field v-model="site2" label="Portfolio Site" name="website2" />
            <v-text-field v-model="site3" label="Project Site" name="website3" />
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
                :rules="inputRules"
              />
              <v-text-field
                v-model="password1"
                label="Confirm Password"
                prepend-icon="lock"
                :rules="inputRules"
              />
            </v-layout>
            <v-spacer />

            <v-btn flat class="primary mx-0 mt-3" router to="/welcome">
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
export default {
  data() {
    return {
      title: '',
      content: '',
      address: '',
      email: '',
      phone: '',
      site1: '',
      site2: '',
      site3: '',
      fname: '',
      lname: '',
      password: '',
      password1: '',
      city: '',
      state: '',
      zip: '',

      inputRules: [v => v.length >= 3 || 'Minimum Length is 3 characters'],
      loading: false
    }
  },
  methods: {}
}
</script>
