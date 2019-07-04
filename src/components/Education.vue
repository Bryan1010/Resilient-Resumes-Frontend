<template>
  
      
     

    <v-container fluid>
          <h2 class="tertiary--text">Education information is key as it is your most recent experience for an employer to see.</h2>
          <br />
          <h2 class="primary--text">Education Tips:</h2>
        <ul class="primary--text subheading">
        <li> Start filling in the information with the school you are currently attending.</li>
        <br />
        <li>Include all schools attented up to high school.</li>
        <br />
        <li>Do your best to fill all the information.</li>

        </ul>
        </v-card-text>       
            
        <v-card-text>
          <v-form ref="form" id="form" class="px-5">

        <!-- TODO: Dynamic entry of num schools to output school form inputs -->
              <v-text-field class="pl-5"
              label="How many schools would you like on your resume?"
              name="schoolnum"
              v-model="number"
             
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              class="pl-5"
              label="What is the School name?"
              name="schoolname"
              v-model="schoolname"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field 
            class="pl-5"
              label="What is the School City?"
              name="schoolcity"
              v-model="schoolcity"
              
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
            class="pl-5"
              label="What is the School State?"
              name="schoolstate"
              v-model="schoolstate"
            
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
            class="pl-5"
              label="What is the School Zip?"
              name="schoolzip"
              v-model="schoolzip"
           
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
            class="pl-5"
              label="What is your major for this school?"
              name="major"
              v-model="major"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-tooltip top>
            <template v-slot:activator="{ on }">  
            <v-text-field
            class="pl-5"
              label="What is your minor for this school?"
              name="schoolstate"
              v-model="major"
              prepend-icon="school"
              :rules="inputRules"
              v-on="on"
            ></v-text-field>
            </template>
        <span>Leave this option blank if you do not have a minor.</span>
      </v-tooltip>
            <v-combobox
            class="pl-5"
            v-model="selectdegree"
            :items="items"
            name="degreetype"
            label="What is your degree type for this school"
          ></v-combobox>
           <v-tooltip top>
            <template v-slot:activator="{ on }"> 
          <v-text-field
            class="pl-5"
              label="What is your Overall GPA for this school?"
              name="gpa"
              v-model="gpa"
              prepend-icon="grade"
              :rules="inputRules"
              v-on="on"
            ></v-text-field>
            </template>
        <span>An overall GPA is the GPA of your performance in college thus far.</span>
      </v-tooltip>
          <!--Need to dynamically add these optons when they select yet -->
     <v-text-field label=" Do you have another major to add for this school?" class="pl-5" readonly>
      </v-text-field> 
       <v-radio-group v-model="answer1" :mandatory="false" class="pl-5">
        <v-radio label="Yes" value="Yes"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group> 
       <v-text-field label=" Do you have another minor to add for this school?" class="pl-5" readonly>
      </v-text-field> 
       <v-radio-group v-model="answer2" :mandatory="false" class="pl-5">
        <v-radio label="Yes" value="Yes"></v-radio>
        <v-radio label="No" value="No"></v-radio>
      </v-radio-group> 
      
     
      
          </v-form>

          
        </v-card-text>
</v-container>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
      
    }
  }
</script>
