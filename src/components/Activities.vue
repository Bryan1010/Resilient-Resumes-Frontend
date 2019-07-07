<template>

   
     
        <v-container fluid>
     
        <h2 class="tertiary--text">An objective statement is a statement that describes 
      you are looking for or to achieve with your resume.</h2>
        <br />
        <h2 class="primary--text">Objective Tips:</h2>
        <ul class="primary--text subheading">
        <li>Start with your best professional skill you can offer.</li><ul><li><b><i> A driven personality..</i></b></li></ul>
        <br />
        <li> State the position and the company your applying for.</li><ul><li> <b><i>An intern at Penn State..</i></b></li></ul>
        <br />
        <li> If putting out mass resumes simply state the position your looking for and what you hope to gain.</li><ul><li> <b><i>An intern position to further my development skills..</i></b></li></ul>

        </ul>
                
        
       
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