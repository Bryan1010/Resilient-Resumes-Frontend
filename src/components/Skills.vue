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
            <v-card-text class="primary--text"><span>The skills don't have to be the greatest ever, be honest and don't focus on latest technologies unless you are familiar with them</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Be sure to list your level of familiarity. </span></v-card-text>
          </v-card>
          </v-expansion-panel-content>
      </v-expansion-panel>

                
        
       
         <br />
  
    
          <v-form  ref="form" id="form" class="px-5">
          
       <v-tooltip right>
        <template v-slot:activator="{ on }">
        <v-text-field
              label="What is your objective statement?"
              name="objective"
              placeholder="Highly-motivated Information Science and Technology undergraduate with a 3.9 GPA looking to fill a position as a Database Intern."
              v-model="objective"
              prepend-icon="work"
              :rules="inputRules"
              v-on="on"
            ></v-text-field>
            </template>
        <span>It is highly recommended to include an objective statement.</span>
      </v-tooltip>
            
        <v-text-field
        
              label="What position are you applying for?"
              name="position"
              placeholder="IST Summer Internship"
              v-model="job"
              prepend-icon="work"
              :rules="inputRules"
            ></v-text-field>
           
   
          
</v-form>
        </v-container>

</template>

<script>
   
export default {
    components:{  },
  data() {
    return {
        objective:"",
      job:""
     };
  },
  methods: {
      
    }
  }
</script>