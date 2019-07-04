
<template>
<div>
   <v-container>
      <Navbar />
      <v-layout align-start justify-start column fill-height>
     <v-flex lg12 md8 xs5>
       <h1 class="display-4 font-weight-thin white--text">Welcome</h1>
       <br />
     </v-flex>
    </v-layout>
  <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    <v-layout align-center justify-center column>
     <v-spacer></v-spacer>
     <v-flex lg12 md8 xs5>

       <p class="headline white--text  ">
         <br />
         Resilient Resumes is an application designed to help you create your resume.
         <br />
         You will receive customize feedback based on your input.
         <br />
         With this feedback you can refine your information for the most Resilient Resume possible.
         <br />
         Click start to begin.
       </p>
    <Profile/>
     </v-flex>
      
    </v-layout>
     
    
    </v-container>
    </div>

</template>



<script>
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
export default {
  components: { Navbar, Profile },
  data() {
    return {
      
      
    };
  },

 
};
</script>

<style>

#app > div{
    background-color: #093162;

 }

</style>

