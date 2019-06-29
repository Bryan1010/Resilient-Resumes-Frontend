<template>
  <v-dialog max-width="800px">
      <v-btn medium outline color="primary" slot="activator">Next</v-btn>
     

    <v-card>
        <v-layout align-center justify-end row reverse>
      
      <v-card-title>
        <h1 class="display-2 primary--text">Education</h1>
      </v-card-title>
        </v-layout>
        <v-card-text>
         <v-layout align-center justify-end row>
          <p class="display-1 tertiary--text font-weight-thin my-5">
            Start filling in the information with your most recent school.
            <br />
            <br />Include all schools attented up to high school.
            <br />
            <br />Do your best to fill all boxes.
          </p>
         </v-layout>
      
      </v-card-text>

     
        <v-card-text>
          <v-form  ref="form" id="form">

        
              <v-text-field
              label="How many schools would you like on your resume?"
              name="schoolnum"
              v-model="number"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              label="What is the School name?"
              name="schoolname"
              v-model="schoolname"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              label="What is the School City?"
              name="schoolcity"
              v-model="schoolcity"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              label="What is the School State?"
              name="schoolstate"
              v-model="schoolstate"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              label="What is the School State?"
              name="schoolstate"
              v-model="schoolstate"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-text-field
              label="What was the degree program for this school?"
              name="schoolstate"
              v-model="schoolstate"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>

            <v-combobox
            v-model="select"
            :items="items"
            name="degreetype"
            label="Select your degree for this school"
          ></v-combobox>
          </v-form>

          <v-text-field
              label="What was the degree program for this school?"
              name="schoolstate"
              v-model="schoolstate"
              prepend-icon="school"
              :rules="inputRules"
            ></v-text-field>
        </v-card-text>

    </v-card>
  </v-dialog>
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
      ]
    };
  },
  methods: {
      
    }
  }
</script>
