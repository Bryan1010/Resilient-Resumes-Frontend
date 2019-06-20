
<template>
<div id="app">
   <v-container>
      <Navbar />
      <v-layout align-start justify-start column fill-height>
     <v-flex x12 md6>
       <h1 class="display-4 my-5 font-weight-thin white--text">Welcome</h1>
     </v-flex>
    </v-layout>
    <v-layout align-center justify-center column>
     <v-flex>
       <p class="headline white--text font-weight-thin ">
         Resilient Resumes is an application designed to help you create your resume.
         <br />
         You will receive customize feedback based on your input.
         <br />
         With this feedback you can refine your information for the most Resilient Resume possible.
         <br />
         Click start to begin.
       </p>
       <v-btn large outline color="secondary">Start</v-btn>
     </v-flex>
    </v-layout>
     
    
    </v-container>
  </div>
</template>



<script>
import Navbar from "../components/Navbar"
export default {
  components: { Navbar },
  data() {
    return {
      
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  },

 
};
</script>

<style>

#app > div{
    background-color: #093162;

 }

</style>

