<template>

<v-app>
<Lognavbar />

    <v-stepper vertical class="mt-5 py-5 px-5 mx-5" v-model="e6">
      <v-stepper-step :complete="e6 > 1" step="1">
        Enter your Objective Statement
        
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="white" height="auto" width="80%" class="px-5" >
          <v-progress-linear value="5" height="4" width="auto"  color="primary">  </v-progress-linear>
          <v-container lg12 md8 xs4>
<Objective />
          </v-container>
        </v-card>
         <v-btn color="primary" router to='/welcome'>Home</v-btn>
        
        <v-btn color="tertiary" class="white--text" @click="e6 = 2">Continue</v-btn>    
         <v-btn color="primary" to="save">Save</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Enter your Education</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="white" height="auto" width="80%"  class="px-5">
            <v-progress-linear value="15" height="4" width="auto"  color="primary">  </v-progress-linear>

        <Education />
            
        </v-card>
       <v-btn color="primary" router to='/welcome'>Home</v-btn>
        
        <v-btn color="tertiary" class="white--text" @click="e6 = 3">Continue</v-btn>    
         <v-btn color="primary" to="save">Save</v-btn>
      
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Relevant Coursework</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 4" step="4">Experience</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">Technical Skills</v-stepper-step>
      <v-stepper-content step="5">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 6" step="6">Honors and Achievements</v-stepper-step>
      <v-stepper-content step="6">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 7">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 7" step="7">Activities</v-stepper-step>
      <v-stepper-content step="7">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary">Submit for Feedback</v-btn>
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
