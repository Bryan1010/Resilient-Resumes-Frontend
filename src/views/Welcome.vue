
<template>

  <div class="white--text pt-4 px-5">
    <v-container>
    <Lognavbar />
    <v-spacer>
      <v-layout  >
     <h1 align-start justify-start column fill-height class="display-3 ">Hi, {{fname}} Let's Begin</h1>
     
           
      </v-layout>
     
  <v-btn large outline color="secondary" router to='/resume'>Build your Resume</v-btn>
       </v-spacer>
     <v-card align-center justify-space-around class="my-4" >
    <v-container>

   
    <h2 class="primary--text pt-4"> To start building your Resilient Resume, you will need to be able to answer the following questions:</h2>
    <ul class="subheading">
     <h3 class="red--text">Amie will come back and fix the style on this page It's not finalized and it's ugly</h3>
      <li>Objective Statement</li>
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
      </v-card>
    </v-container>   
    </div>
  
</template>

<script>
import Lognavbar from "../components/Lognavbar";

export default {
  components: { Lognavbar },
  data() {
    return {
      
    };
  },

  methods: {
    
  }
};
</script>

<style>
</style>

