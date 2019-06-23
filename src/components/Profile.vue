<template>
  <v-dialog max-width="800px">
    <v-btn large outline color="secondary" slot="activator">
      <span>Start</span>
    </v-btn>

    <v-card>
      <v-card-title>
        <h1 class="display-2 primary--text">Let's Start</h1>
      </v-card-title>
      <v-layout  align-start justify-start row reverse >
        <v-card-text>
          <p class="display-1 font-weight-thin tertiary--text my-5">
            A resume is a snapshot of who you are and what you can bring to the table.
            <br />
            <br />Let's Start by completing a profile with your information.
            <br />
            <br />Be sure to list your LinkedIn Profile or any other personal websites you would like to make available on your resume.
          </p>
         
        </v-card-text>
      

     
        <v-card-text>
          <v-form  ref="form" id="form">
             <v-layout  align-start justify-start row fill-height>
            <v-text-field
              label="First Name"
              v-model="name"
              prepend-icon="person_pin"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Last Name"
              v-model="name"
              prepend-icon="person_pin"
              :rules="inputRules"
            ></v-text-field>
             </v-layout>
            <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
            <v-text-field
              label="Street Address"
              v-model="address"
              prepend-icon="home"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field label="City" v-model="city" prepend-icon="home" :rules="inputRules"></v-text-field>
            <v-layout  align-start justify-start row fill-height>
            <v-text-field label="State" v-model="state" prepend-icon="home"></v-text-field>
            <v-text-field label="Zip" v-model="zip" prepend-icon="home" :rules="inputRules"></v-text-field>
            </v-layout>
            <v-text-field label="Phone" v-model="phone" prepend-icon="phone" :rules="inputRules"></v-text-field>
         
             <v-text-field label="www.personalwebsite.com" v-model="content" prepend-icon="link"></v-text-field>
            <v-text-field label="www.personalwebsite.com" v-model="content" prepend-icon="link"></v-text-field>
            <v-text-field label="www.personalwebsite.com" v-model="content" prepend-icon="link"></v-text-field>
         <v-layout  align-start justify-start row fill-height>
            <v-text-field
              label="Set Password"
              v-model="phone"
              prepend-icon="lock_open"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              v-model="phone"
              prepend-icon="lock"
              :rules="inputRules"
            ></v-text-field>
         </v-layout>
            <v-spacer></v-spacer>

            <v-btn clat class="primary mx-0 mt-3" @click="submit">Create Profile</v-btn>
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
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum Length is 3 characters"],
      loading: false
    };
  },
  methods: {}
};
</script>
