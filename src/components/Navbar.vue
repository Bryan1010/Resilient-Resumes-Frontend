<template>
  <nav >
    <v-toolbar extended flat class="transparent" app>
      <img class="mt-5" src="..\.\assets\ResilientResumes.png" height="85">
     
      <v-spacer></v-spacer>
<v-layout align-end justify-start column fill-height>
  <v-flex class="mt-3" >

            <Login/>
        </v-flex>
  
</v-layout>   
          
          
      
      
      
      
    </v-toolbar>
    
  </nav>
</template>

<script>
import Login from "./Login"
export default {
  components: { Login },
  data() {
    return {
      drawer: false,
      links: [
        { }
      ]
    };
  }
};
</script>
<style>
.v-text-field {
    color:white;

 }
 </style>