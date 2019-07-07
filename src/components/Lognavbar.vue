<template>
  <nav >
   
    <v-toolbar prominent flat extended color="primary" app>
    <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
 <a class="transparent"  href='/#/welcome'><img class="mt-5" src="../assets/ResilientResumes.png" height="85"></a>
 </v-toolbar>
     <v-navigation-drawer v-model="drawer" app class="primary">     
        <v-layout column align-center>
        <v-flex class="mt-5">
          <v-card height="auto" width="auto">
         <h1 class="display-1 primary--text">
          Profile Name
          Saved resume
          Output Button goes here
          </h1>
          </v-card>
        </v-flex>
      </v-layout>
         
      </v-navigation-drawer>
           
       
   
    
  </nav>
</template>

<script>

export default {

  data() {
    return {
    drawer: false ,
    tile: false 
    
    };
  }
};
</script>
<style>
#logo{
  z-index: 1500;

}
 </style>