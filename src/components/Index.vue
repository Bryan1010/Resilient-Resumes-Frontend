
<style>
#inspire{
  background-image: url(../assets/Group1.svg);
 
  background-size: cover;
}
.nav{
  color:white;
  
}
</style>



<template
>

  <v-app >
   
      <v-flex id="inspire">


    <v-toolbar flat color="transparent" >
      
     
     <v-toolbar-title> <img src="../assets/ResilientResumes.png" /> </v-toolbar-title>

    </v-toolbar>
      </v-flex>

    <!--
    <v-content>
     
        
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    -->
  
  </v-app>

</template>

