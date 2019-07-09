<template>

   
     
        <v-container fluid>
     
        <h2 class="tertiary--text">Technical skills are vital to showcase what frameworks, languages and workflows you are familiar with. </h2>
        <br />
        <v-expansion-panel>
         <v-expansion-panel-content class="primary--text">
          <template v-slot:header><h2 class="primary--text">Technical Skills Tips:</h2></template>
          <v-card>
            <v-card-text ><span class="primary--text" >List the skills you have utilized not only in school but in the workplace or in a research capacity.</span>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>The skills don't have to be the best buzzwords, be honest and do not focus on latest technologies unless you are familiar with them</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Be sure to list your level of familiarity. </span></v-card-text>
          </v-card>
          </v-expansion-panel-content>
      </v-expansion-panel>

                
        
       
         <br />
  
    
          <v-form  ref="form" id="form" class="px-5">
        <v-text-field
              label="How many skills would you like to list?"
              name="numSkills"
              v-model="numSkills"
              type="number"
             
              
            ></v-text-field>
            
        <v-text-field
        
              label="What is the name of the skill?"
              name="skill"
         
              v-model="skill"
                       
            ></v-text-field>
 <v-tooltip top>
            <template v-slot:activator="{ on }">  
        <v-combobox
        
            v-model="selectlevel"
            :items="items"
            name="skillLevel"
            label="What is your level of knowledge for this skill?"
          ></v-combobox>
          </template>
 <span>Select beginner if you just learned the skill in a class, intermediate if you have done a project in it and advanced if you are considered a resource in this area. </span>
      </v-tooltip>
          
</v-form>
        </v-container>

</template>

<script>
   
export default {
    components:{  },
  data() {
    return {
        numSkills:"",
      skill:"",
      Actdesc:"",
      items: [
        'Learning',
        'Beginner',
        'Intermediate',
        'Advanced'
      ],

     };
  },
  methods: {
      
    }
  }
</script>