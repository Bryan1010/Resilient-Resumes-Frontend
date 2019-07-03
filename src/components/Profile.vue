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
            AND NOW THIS FORM IS UGLY AND WILL NEED SOME REWORKING BUT THE COMPONENTS SHOULD BE CLOSE
            <br />Let's Start by completing a profile with your information.
            <br />
            <br />
          </p>
         
        </v-card-text>
      

     
        <v-card-text>
          <v-form  ref="form" id="form">
             <v-layout  align-start justify-start row fill-height>
            <v-text-field
              label="First Name"
              name="fname"
              v-model="fname"
              prepend-icon="person_pin"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Last Name"
              name="lname"
              v-model="lname"
              
              :rules="inputRules"
            ></v-text-field>
             </v-layout>
            <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
            <v-text-field
              label="Street Address"
              name="address"
              v-model="address"
              prepend-icon="home"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field label="City" name="city" v-model="city"  :rules="inputRules"></v-text-field>
            <v-layout  align-start justify-start row fill-height>
            <v-text-field label="State" name="state" v-model="state" ></v-text-field>
            <v-text-field label="Zip" name="zip" v-model="zip"  :rules="inputRules"></v-text-field>
            </v-layout>
            <v-text-field label="Phone" name="phone" v-model="phone" prepend-icon="phone" :rules="inputRules"></v-text-field>
            <v-tooltip top>
        <template v-slot:activator="{ on }">
        
             <v-text-field label="LinkedIn Profile" name="website1" v-model="site1"  v-on="on"></v-text-field>
             </template>
        <span>It is highly recommended to include a LinkedIn Profile or personal professional websites.</span>
      </v-tooltip>
            <v-text-field label="Portfolio Site" name="website2" v-model="site2"></v-text-field>
            <v-text-field label="Project Site" name="website3" v-model="site3" ></v-text-field>
         <v-layout  align-start justify-start row fill-height>
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
              label="Set Password"
              v-model="password"
              prepend-icon="lock_open"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              v-model="password1"
              prepend-icon="lock"
              :rules="inputRules"
            ></v-text-field>
         </v-layout>
            <v-spacer></v-spacer>

            <v-btn flat class="primary mx-0 mt-3"  router to='/welcome'>Create Profile</v-btn>
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
      address: "",
      email:"",
      phone:"",
      site1:"",
      site2:"",
      site3:"",
      password:"",
      password1:"",
      city:"",
      state:"",
      zip:"",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum Length is 3 characters"],
      loading: false
    };
  },
  methods: {}
};
</script>
