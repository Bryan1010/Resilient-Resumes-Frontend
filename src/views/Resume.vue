<template>

<v-app>
<Lognavbar />

    <v-stepper id="resume" vertical class="mt-5 py-5 px-5 mx-5" v-model="e6">
      
      <h1 class="display-1 primary--text">Answer the questions in each field to start building your Resilient Resume.</h1><v-stepper-step :complete="e6 > 1" step="1">
        Enter your Objective Statement
        
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="white" height="auto" class="px-5" >
          
                 <v-container lg12 md8 xs4>
<Objective />
          </v-container>
        </v-card>
         <v-btn color="primary" router to='/welcome'>Home</v-btn>
        
        <v-btn color="tertiary" class="white--text" @click="e6 = 2">Continue</v-btn>    
    
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Enter your Education</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="white" height="auto"  class="px-5">

        <Education />
            
        </v-card>
       <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 1">Previous</v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 3">Continue</v-btn>

     
      
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Relevant Coursework</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="white" height="auto"  class="px-5">
          <Relcourse />
        </v-card>
        <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 2">Previous</v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 4">Continue</v-btn>
    
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 4" step="4">Experience</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="white" height="auto"  class="px-5">
          <Experience />
        </v-card>
        <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 3">Previous</v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 5">Continue</v-btn>
       
      
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">Technical Skills</v-stepper-step>
      <v-stepper-content step="5">
        <v-card color="white" height="auto"  class="px-5">
          <Skills />
        </v-card>
       <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 4">Previous</v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 6">Continue</v-btn>
     
        
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 6" step="6">Honors and Achievements</v-stepper-step>
      <v-stepper-content step="6">
        <v-card color="white" height="auto"  class="px-5">
          <Honors />
        </v-card>
        <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 5">Previous</v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 7">Continue</v-btn>
        
      
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 7" step="7">Activities</v-stepper-step>
      <v-stepper-content step="7">
       <v-card color="white" height="auto"  class="px-5">
          <Honors />
        </v-card>
        <v-btn color="primary" router to='/welcome'>Home</v-btn>
        <v-btn color="secondary" class="primary--text" @click="e6 = 6">Previous</v-btn>
        <v-btn color="tertiary">Submit for Feedback</v-btn>
    
        
      </v-stepper-content>
    </v-stepper>
</v-app>
</template>
<style>
#resume{
  max-width:70%;

}
</style>

<script>
import Lognavbar from "../components/Lognavbar";
import Objective from "../components/Objective";
import Education from "../components/Education";
import Relcourse from "../components/Relcourse";
import Experience from "../components/Experience";
import Skills from "../components/Skills"
export default {
  components: { Lognavbar, Objective, Education, Relcourse, Experience, Skills },
  data() {
    return {
      e6:1
    
    }
  },
 

    
  
}
</script>
