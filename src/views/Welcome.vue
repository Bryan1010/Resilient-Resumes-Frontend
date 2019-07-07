
<template>

  <div class="white--text pt-4 px-5">
    
    <Lognavbar />
    
      <v-layout  >
     <h1 align-start justify-start column fill-height class="display-3 pt-5">Hi, {{fname}}</h1>
     <!--Needs to dynamically populate first name -->
     
           
      </v-layout>
 
  <v-btn large outline color="secondary" class="my-3" router to='/resume'>Build Resume</v-btn>
     

<h2  class="display-1 pt-5">Not sure where to start? </h2> <br /> 
<h2 class="font-weight-thin"> Check out the questions below to inspire you to start gathering the information you will need for your Resilient Resume.</h2>
  
   <v-stepper class="my-3" v-model="e1" id="welcome" inset>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Objective Statement</v-stepper-step>
      
      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Education</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Relevant Coursework</v-stepper-step>
    

        <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Experience</v-stepper-step>

        <v-divider></v-divider>
    <v-stepper-step :complete="e1 > 5" step="5">Technical Skills</v-stepper-step>
      
        <v-divider></v-divider>
<v-stepper-step :complete="e1 > 6" step="6">Achievements</v-stepper-step>
      
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 7" step="7">Activities</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
         
        <v-card-content>
         <v-layout align-start justify-center row fill-height class="pt-5">
          <p class="display-1 primary--text">What are you looking to accomplish with this resume?</p>
          </v-layout>
          <v-layout align-start justify-center row fill-height class="pb-5">
          <p class="display-1 primary--text">What is the position you are applying for?</p>
          </v-layout>
          </v-card-content>
         
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
          <v-layout align-start justify-center row fill-height class="pt-5">
          <p class="display-1 primary--text">What is your degree program?</p> 
          </v-layout>
          <v-layout align-start justify-center row fill-height class="pb-5">
          <p class="display-1 primary--text">What is your Cumalitive GPA?</p>
</v-layout>
         </v-card-content>
        
        </v-card>
      <v-btn
          color="secondary"
          class="primary--text"
          light
          @click="e1 = 1"
        >
          Previous
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="3">
       <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
           <v-layout align-start justify-center row fill-height class="pt-5">
          <p class="display-1 primary--text">What are the names of the courses that relevant to your career goal?</p>
           </v-layout>
        <v-layout align-start justify-center row fill-height class="pb-5">
          <p class="display-1 primary--text">What did you learn in those courses?</p>
        </v-layout>

          </v-card-content>
        
        </v-card>

          <v-btn
          color="secondary"
          class="primary--text"
          light
          @click="e1 = 2"
        >
          Previous
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

       

      </v-stepper-content>
      
      <v-stepper-content step="4">
       <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
           <v-layout align-start justify-center row fill-height class="pt-5">
          <p class="display-1 primary--text">What experiences in your college career have helped your career growth?</p>
           </v-layout>
           <v-layout align-start justify-center row fill-height class="pb-5">
          <p class="display-1 primary--text">What projects in class or personally have you completed to learn a new skill?</p>
           </v-layout>

          </v-card-content>
        
        </v-card>

         <v-btn
          color="secondary"
          class="primary--text"
          light
          @click="e1 = 3"
        >
          Previous
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 5"
        >
          Continue
        </v-btn>
      </v-stepper-content>
 <v-stepper-content step="5">
       <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
          <v-layout align-start justify-center row fill-height class="pt-5">
          <p class="display-1 primary--text">What software languages are you proficient or learning?</p>
          </v-layout>
           <v-layout align-start justify-center row fill-height class="pb-5">
          <p class="display-1 primary--text">What technical processes do you excel in?</p>
           </v-layout>
         

          </v-card-content>
        
        </v-card>

        <v-btn
          color="secondary"
          class="primary--text"
          light
          @click="e1 = 4"
        >
          Previous
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 6"
        >
          Continue
        </v-btn>
      </v-stepper-content>
<v-stepper-content step="6">
       <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
          <v-layout align-start justify-center row fill-height class="pt-5">
          <h2 class="display-1 primary--text">What awards have you earned during your college career?</h2>
           </v-layout>
           <v-layout align-start justify-center row fill-height class="pb-5">
          <h2 class="display-1 primary--text">What honors have you recieved in and out of the classroom?</h2>
           </v-layout>

          </v-card-content>
        
        </v-card>

        <v-btn
          color="secondary"
          class="primary--text"
          light
          @click="e1 = 5"
        >
          Previous
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 7"
        >
          Continue
        </v-btn>
      </v-stepper-content>
<v-stepper-content step="7">
       <v-card
          class="mb-5"
          color="white lighten-1"
          height="auto"
        >
        <v-card-content>
          <v-layout align-start justify-center row fill-height class="pt-5">
          <h2 class="display-1 primary--text">What roles have you served your community on or off campus?</h2>
          </v-layout>
          <v-layout align-start justify-center row fill-height class="pb-5">
          <h2 class="display-1 primary--text">What organizations have you been apart of and did you serve as a leader?</h2>
          </v-layout>

          </v-card-content>
        
        </v-card>

        
        <v-btn
        color="secondary"
          class="primary--text"
         
          @click="e1 = 6"
        >
          Previous
        </v-btn>
         <v-btn
          color="primary"
         router to='/resume'
        >
          Build Resume
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>
<style>
#welcome{
  max-width:70%;

}
</style>

    <!--
    <v-container>

   
    <h2 class="display-1 secondary--text pt-4"> To start building your Resilient Resume, you will need to be able to answer the following questions:</h2>
    <br />
    <ul class="subheading">
     
       
    <ul> <li>What are you looking to accomplish with this resume? </li></ul>
    <li>Position applying for</li>
       <ul> <li>What is the position you are applying for? </li></ul>
      <li>Education Information: 
        <ul>
          <li>What is the name of your school?</li>
          <li>What is your degree program?</li>
          <li>What is your Cumalitive GPA?</li>
          <li>When do you expect to graduate?</li></ul> </li>

        <li>Relevant Coursework: 
        <ul>
          <li>Names of the course</li>
          <li>Description of course and what you learned</li>
          </ul> </li>

        <li>Experience - This includes work, education and even volunteer if your position contributes to your objective statement.
        <ul>
          <li>Name</li>
          <li>Location</li>
          <li>Description</li>
          <li>Start and End Date</li>
          <li>If a project was involved:</li>
            <ul>
            <li>Project Title</li>
          <li>The role you served</li>
          <li>Description - Need to be able to share it was successful.</li>
          </ul>
          </ul> </li>
        
        <li>Technical Skills: 
        <ul>
          <li>Skill Name</li>
          <li>Skill Level</li>
          </ul> </li>

      <li>Achievements: 
         <ul>
           <li>The Name of the award or achievement.</li>
          <li>A description of the award or achievement.</li>
          
          </ul> </li>
      <li>Activities- Your activities completed on and off campus. Volunteer activities and leadership roles.</li>
<ul>
           <li>The Name of the award or achievement.</li>
          <li>A description of the award or achievement.</li>
          
        </ul>

      </ul>
  
    </v-container>
      
    </v-container>   
    </div>
  
</template>
-->
<script>
import Lognavbar from "../components/Lognavbar";

export default {
  components: { Lognavbar },
  data() {
    
    return {
       e1: 0
      
    };
  },

  methods: {
  
  }

};
</script>

<style>
</style>

