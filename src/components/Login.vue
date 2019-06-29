<template>

    
      <v-dialog max-width="600px">
     
          <v-btn large outline color="secondary" slot="activator">
            <span>Login</span>
     </v-btn>
       
        <v-card>
          <v-card-title>
            <h2>Enter your Login Information</h2>
          </v-card-title>
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
              <v-text-field label="Password" v-model="password" prepend-icon="vpn_key"></v-text-field>

              <v-spacer></v-spacer>

              <v-btn flat class="primary mx-0 mt-3" router to='/welcome'>Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
  
 
</template>
<script>

export default {

  data() {
    return {
      email: "",
      password: "",

      inputRules: [v => v.length >= 3 || "Minimum Length is 3 characters"],
      loading: false,
      
    };
  },
  methods: {}
};
</script>

