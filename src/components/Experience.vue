<template>

   
     
        <v-container fluid>
     
        <h2 class="tertiary--text">Experience is important to showcase your strengths and what you have learned during your college career.</h2>

        <br />
        <v-expansion-panel>
         <v-expansion-panel-content class="primary--text">
          <template v-slot:header><h2 class="primary--text">Experience Tips:</h2></template>
          <v-card>
            <v-card-text ><span class="primary--text" >Consider listing all experiences including group projects, personal projects or volunteer projects if they showcase skills gained.
            <br />
            <b><i>Created a website at Big Brothers Big Sisters. Coordinated volunteers at Opportunity House.</i></b></span>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Use action words in short, clearly writted phrases to describe experiences.</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Avoid <i>"I was responsible for"</i>, <i>"My duties included"</i> or any other introductory phrases that deter from the main point.</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>List accomplishments whenever possible rather than just describe duties.</span></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

       
         <br />
  <!--Need to dynamically populate the fields based on numExp -->
    
          <v-form  ref="form" id="form" class="px-5">
          
         <v-text-field
              label="How many experiences would you like to list?"
              name="numExp"
              v-model="numExp"
              type="number"
          ></v-text-field>
        <v-text-field
              label="What was the name of the organization of your experience?"
              name="Expname"
              v-model="Expname"
              prepend-icon="work"             
        ></v-text-field>
        <v-text-field
              label="What was city of your experience?"
              name="Expcity"
              v-model="Expcity"
        ></v-text-field>
      
  
           
   
          
</v-form>
        </v-container>

</template>

<script>
   
export default {
    components:{  },
  data() {
    return {
        numExp:"",
        Expname:"",

      
     };
  },
  methods: {
      
    }
  }
</script>