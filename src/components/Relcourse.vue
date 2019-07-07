<template>

   
     
        <v-container fluid>
     
        <h2 class="tertiary--text">Relevant Courses are the courses that contribute to the advancement of your career.</h2>
        <br />
        <v-expansion-panel>
         <v-expansion-panel-content class="primary--text">
          <template v-slot:header><h2 class="primary--text">Relevant Coursework Tips:</h2></template>
          <v-card>
            <v-card-text ><span class="primary--text" >Start with your strongest course, in an interview it will be the first one the interviewer sees.</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Give the course name not the course catalog number, it is more descriptive.</span><br/><b><i>Organization of Data versus IST210</i></b></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>In the description, list the skills you learned from this course and any special projects completed.</span></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
       <br />
  
    <!--Need to dynamically populate fields based on number input of numCourse-->
          <v-form  ref="form" id="form">
          
       <v-tooltip right>
        <template v-slot:activator="{ on }">
        <v-text-field
              label="How many courses would you like to list?"
              name="numCourse"
              v-model="numCourse"
              type="number"
             
              v-on="on"
            ></v-text-field>
            </template>
        <span>Only count career relevant courses, most interviewers will not care about basketweaving.</span>
      </v-tooltip>
            
        <v-text-field
        
              label="What is the name of the course?"
              name="courseName"
              prepend-icon="book"
              v-model="courseName"
              
             
            >
      </v-text-field>
           
   <v-textarea
        
              label="How would you describe the above course?"
              name="courseDesc"
              prepend-icon="book"
              v-model="courseDesc"
              
             
            >
   </v-textarea>
          
</v-form>
        </v-container>

</template>

<script>
   
export default {
    components:{  },
  data() {
    return {
        numCourse:"",
        courseName:"",
        courseDesc:""


     };
  },
  methods: {
      
    }
  }
</script>