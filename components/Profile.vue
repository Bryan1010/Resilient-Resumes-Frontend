<template>
  <v-dialog max-width="800px">
    <v-btn slot="activator" large outline color="secondary">
      <span>Start</span>
    </v-btn>

    <v-card>
      <v-card-title>
        <h1 class="display-2 primary--text">
          Let's Start
        </h1>
      </v-card-title>
      <v-layout align-start justify-start row reverse>
        <v-card-text>
          <p class="display-1 font-weight-thin tertiary--text my-5">
            A resume is a snapshot of who you are and what you can bring to the table.
            <br>
            <br>Let's Start by completing a profile with your information.
            <br>
            <br>Be sure to list your LinkedIn Profile or any other personal websites you would like to make available on your resume.
          </p>
        </v-card-text>

        <v-card-text>
          <v-form id="form" ref="form">
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
                prepend-icon="person_pin"
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
            <v-text-field v-model="city" label="City" name="city" prepend-icon="home" :rules="inputRules" />
            <v-layout align-start justify-start row fill-height>
              <v-text-field v-model="state" label="State" name="state" prepend-icon="home" />
              <v-text-field v-model="zip" label="Zip" name="zip" prepend-icon="home" :rules="inputRules" />
            </v-layout>
            <v-text-field v-model="phone" label="Phone" name="phone" prepend-icon="phone" :rules="inputRules" />

            <v-text-field v-model="content" label="www.personalwebsite.com" name="website1" prepend-icon="link" />
            <v-text-field v-model="content" label="www.personalwebsite.com" name="website2" prepend-icon="link" />
            <v-text-field v-model="content" label="www.personalwebsite.com" name="website3" prepend-icon="link" />
            <v-layout align-start justify-start row fill-height>
              <v-text-field
                v-model="phone"
                label="Set Password"
                prepend-icon="lock_open"
                :rules="inputRules"
              />
              <v-text-field
                v-model="phone"
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
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      phone: '',
      zip: '',
      state: '',
      city: '',
      address: '',
      email: '',
      lname: '',
      fname: '',
      due: null,
      inputRules: [v => v.length >= 3 || 'Minimum Length is 3 characters'],
      loading: false
    }
  },
  methods: {}
}
</script>
