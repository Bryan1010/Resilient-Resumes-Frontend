<template>
  <nav >
    <v-toolbar extended flat class="transparent" app>
      <img class="mt-5" src="..\.\assets\ResilientResumes.png" height="85">
     
      <v-spacer></v-spacer>

    <v-text-field class="white--text"
        v-model="value"
      
        label="User-Email"
       
              >
        <template v-slot:progress>
          <v-progress-linear
            v-if="custom"
            :value="progress"
            :color="colors"
            height="7"
          ></v-progress-linear>
        </template>
      </v-text-field>
  
            
          
           <v-btn large outline color="secondary"><span>Log In</span></v-btn>
      
      
      
      
    </v-toolbar>
    
  </nav>
</template>

<script>

export default {
  components: {  },
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
#email > v-text-field{
    color:white;

 }
 </style>