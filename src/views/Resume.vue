<template>

<v-app>
<Lognavbar />

    <v-stepper class="mt-5" v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Enter your Objective Statement
        
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="white">
<Objective />

        </v-card>
         <v-btn color="primary" router to='/welcome'>Home</v-btn>
        
        <v-btn color="tertiary" class="white--text" @click="e6 = 2">Continue</v-btn>
       
        
          
         <v-btn color="primary" to="save">Save</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Enter your Education</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="white" class="mb-5" height="200px">
            <v-form  ref="form" id="form">

        <Education />
            </v-form>
        </v-card>
        <v-btn color="primary" @click="e6 = 1">Previous</v-btn>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step step="4">View setup instructions</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
</v-app>
</template>

<script>
import Lognavbar from "../components/Lognavbar";
import Objective from "../components/Objective";
import Education from "../components/Education";
export default {
  components: { Lognavbar, Objective, Education },
  data() {
    return {
      e6:1
      
    };
  },

  methods: {
    
  }
};
</script>
