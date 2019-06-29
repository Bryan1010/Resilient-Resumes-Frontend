<template>
  <nav >
    <v-toolbar extended flat class="transparent" app>
    <v-toolbar-side-icon class="white--text" @click="drawer=!drawer"></v-toolbar-side-icon>
      <img class="mt-5" src="..\.\assets\ResilientResumes.png" height="85">
     
      <v-spacer></v-spacer>

     <v-navigation-drawer v-model="drawer" app class="primary">     
          
      </v-navigation-drawer>
           
      
    </v-toolbar>
    
  </nav>
</template>

<script>

export default {

  data() {
    return {
    drawer: false  
    
    };
  }
};
</script>
<style>

 </style>