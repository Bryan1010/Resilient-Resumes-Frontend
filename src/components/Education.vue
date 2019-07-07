<template>
  
      
     

    <v-container fluid>
          <h2 class="tertiary--text">Education information is key as it is your most recent proof of work ethic for an employer to see.</h2>
          <br />
        <v-expansion-panel>
         <v-expansion-panel-content class="primary--text">
          <template v-slot:header><h2 class="primary--text">Education Tips:</h2></template>
          <v-card>
            <v-card-text ><span class="primary--text" >Start filling in the information with the school you are currently attending.</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Include all schools attented up to high school.</span></v-card-text>
          </v-card>
          <v-card>
            <v-card-text class="primary--text"><span>Do your best to fill out all of the information requested.</span></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
<br />
          
            
        <v-card-text>
          <v-form ref="form" id="form" >

        <!-- TODO: Dynamic entry of num schools to output school form inputs -->
              <v-text-field
              label="How many schools would you like on your resume?"
              name="schoolnum"
              v-model="number"
              type="number"
             
           
            ></v-text-field>

            <v-text-field
              
              label="What is the School name?"
              name="schoolname"
              v-model="schoolname"
              prepend-icon="school"
           
            ></v-text-field>

            <v-text-field 
           
              label="What is the School City?"
              name="schoolcity"
              v-model="schoolcity"
              
           
            ></v-text-field>

            <v-text-field
           
              label="What is the School State?"
              name="schoolstate"
              v-model="schoolstate"
            
             
            ></v-text-field>

            <v-text-field
           
              label="What is the School Zip?"
              name="schoolzip"
              v-model="schoolzip"
           
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
          
              label="What is your major for this school?"
              name="major"
              v-model="major"
              prepend-icon="school"
            
            ></v-text-field>

            <v-tooltip top>
            <template v-slot:activator="{ on }">  
            <v-text-field
          
              label="What is your minor for this school?"
              name="minor"
              v-model="minor"
              prepend-icon="school"
            
              v-on="on"
            ></v-text-field>
            </template>
        <span>Leave this option blank if you do not have a minor.</span>
      </v-tooltip>
            <v-combobox
        
            v-model="selectdegree"
            :items="items"
            name="degreetype"
            label="What is your degree type for this school"
          ></v-combobox>
           <v-tooltip top>
            <template v-slot:activator="{ on }"> 
          <v-text-field
       
              label="What is your Overall GPA for this school?"
              name="gpa"
              v-model="gpa"
              prepend-icon="grade"
         
              v-on="on"
            ></v-text-field>
            </template>
        <span>An overall GPA is the GPA of your performance in college thus far.</span>
      </v-tooltip>
          <!--Need to dynamically add these optons when they select yet -->
     <v-text-field label=" Do you have another major to add for this school?" readonly>
      </v-text-field> 
       <v-radio-group v-model="answer1" :mandatory="false" >
        <v-radio label="Yes" value="Yes"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group> 
       <v-text-field label=" Do you have another minor to add for this school?" readonly>
      </v-text-field> 
       <v-radio-group v-model="answer2" :mandatory="false" >
        <v-radio label="Yes" value="Yes"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group>
      <v-text-field label=" What is your date of graduation or expected graduation?" readonly> </v-text-field>
      <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="150"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
        
      <template v-slot:activator="{ on }"> 
        
       <v-text-field
       class="pl-5"
              v-model="date"
              name="graddate"
              prepend-icon="event"
              readonly
              v-on="on"
      ></v-text-field>
       </template>
       <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
      
          </v-form>

          
        </v-card-text>
</v-container>
</template>
<style>
v-card{
  color:#093162;
}
</style>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    schoolname: "",
    schoolcity: "",
    schoolstate: "",
    schoolzip: "",

    select: 'Degree Program',
      items: [
        'PHD',
        'Masters',
        'Bachelors',
        'Associates',
        'Certificate'
      ],
      answer1: 'No',
      answer2: 'No'
  
  }),
  methods: {
      
    }
  }
</script>
