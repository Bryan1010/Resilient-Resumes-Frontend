<template>
  <v-dialog max-width="800px">
    <v-btn slot="activator" medium outline color="primary">
      Next
    </v-btn>

    <v-card>
      <v-layout align-center justify-end row reverse>
        <v-card-title>
          <h1 class="display-2 primary--text">
            Education
          </h1>
        </v-card-title>
      </v-layout>
      <v-card-text>
        <v-layout align-center justify-end row>
          <p class="display-1 tertiary--text font-weight-thin my-5">
            Start filling in the information with your most recent school.
            <br>
            <br>Include all schools attented up to high school.
            <br>
            <br>Do your best to fill all boxes.
          </p>
        </v-layout>
      </v-card-text>

      <v-card-text>
        <v-form id="form" ref="form">
          <v-text-field
            v-model="number"
            label="How many schools would you like on your resume?"
            name="schoolnum"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-text-field
            v-model="schoolname"
            label="What is the School name?"
            name="schoolname"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-text-field
            v-model="schoolcity"
            label="What is the School City?"
            name="schoolcity"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-text-field
            v-model="schoolstate"
            label="What is the School State?"
            name="schoolstate"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-text-field
            v-model="schoolstate"
            label="What is the School State?"
            name="schoolstate"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-text-field
            v-model="schoolstate"
            label="What was the degree program for this school?"
            name="schoolstate"
            prepend-icon="school"
            :rules="inputRules"
          />

          <v-combobox
            v-model="select"
            :items="items"
            name="degreetype"
            label="Select your degree for this school"
          />
        </v-form>

        <v-text-field
          v-model="schoolstate"
          label="What was the degree program for this school?"
          name="schoolstate"
          prepend-icon="school"
          :rules="inputRules"
        />
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
    }
  },
  methods: {

  }
}
</script>
