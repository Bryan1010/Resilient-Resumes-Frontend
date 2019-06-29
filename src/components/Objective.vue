<template>
  <v-dialog max-width="800px">
   <v-btn large outline color="secondary" slot="activator">Build your Resume</v-btn>
      <v-card>
<v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Enter your Objective Statement
        
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card color="white
         lighten-1" class="mb-5" height="200px">
<v-form  ref="form" id="form">
             

        <v-text-field
            
              name="objective"
              v-model="content"
              prepend-icon="work"
              :rules="inputRules"
            ></v-text-field>
</v-form>

        </v-card>
        
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">Enter your Position</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="white" class="mb-5" height="200px">
            <v-form  ref="form" id="form">

        <v-text-field
             
              name="position"
              v-model="title"
              prepend-icon="work"
              :rules="inputRules"
            ></v-text-field>
            </v-form>
        </v-card>
        <v-btn color="primary" @click="e6 = 1">Previous</v-btn>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step step="4">View setup instructions</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
      <v-card-title>
        <h1 class="display-2 primary--text">Objective</h1>
      </v-card-title>
      <v-layout align-start justify-start row reverse>
        <v-card-text>
          <p class="display-1 tertiary--text my-5">
            An objective is important as it communicates your why in a clear and precise manner.
            
           
          </p>
         
         </v-card-text>
     
  
    <v-card-text>
          <v-form  ref="form" id="form">
           
        <v-textarea
              label="Enter your objective statement."
              name="objective"
              v-model="content"
              prepend-icon="account_circle"
              :rules="inputRules"
            ></v-textarea>
        <v-textarea
              label="Enter the title of the position you are applying for"
              name="position"
              v-model="content"
              prepend-icon="work"
              :rules="inputRules"
            ></v-textarea>
            <v-btn medium outline color="primary" router to='/welcome'>Home</v-btn>
            <Education />
         <v-btn medium outline color="primary" to="save">Save</v-btn>
   
          
</v-form>
      </v-card-text> 
  </v-layout> 
      
        
   
    </v-card>
  </v-dialog>
</template>

<script>
   import Education from "./Education"
export default {
    components:{ Education },
  data() {
    return {
        e6:1
     };
  },
  methods: {
      
    }
  }
</script>