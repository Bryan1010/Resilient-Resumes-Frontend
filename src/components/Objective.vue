<template>

   
     
        <v-container fluid>
     
        <h2 class="tertiary--text">An objective statement is a statement that describes 
      what you are looking to achieve.</h2>
    <br />
        
        <v-expansion-panel>
         <v-expansion-panel-content>
          <template v-slot:header><h2 class="primary--text">Objective Tips:</h2></template>
          <v-card>
            <v-card-text><span class="primary--text">Start with your best professional skill you can offer.<br/><b><i> A driven personality..</i></b></span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text><span class="primary--text">State the position and the company your applying for.<br /><b><i> An intern at Penn State..</i></b></span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text><span class="primary--text" >If putting out mass resumes simply state the position your looking for and what you hope to gain..<b><i><br /> An intern position to further my development skills..</i></b></span></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
        
              
              
         <br />
  
    
          <v-form  ref="form" id="form">
          
       <v-tooltip right>
        <template v-slot:activator="{ on }">
        <v-text-field
              label="What is your objective statement?"
              name="objective"
              placeholder="Highly-motivated undergraduate with a 3.9 GPA looking to fill a position as a Database Intern."
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