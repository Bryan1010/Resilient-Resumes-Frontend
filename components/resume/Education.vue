<template>
  <v-layout
    wrap
    align-center
    row
    reverse
  >
    <v-card v-for="i in SchoolQty" :key="i" xs12>
      <v-card-title>
        <h1 class="display-2 primary--text">
          Education
        </h1>
      </v-card-title>
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
            v-model="SchoolQty"
            label="How many schools would you like on your resume?"
            name="schoolnum"
            prepend-icon="school"
          />

          <v-text-field
            v-model="schoolname"
            label="What is the School name?"
            name="schoolname"
            prepend-icon="school"
          />

          <v-text-field
            v-model="schoolcity"
            label="What is the School City?"
            name="schoolcity"
            prepend-icon="school"
          />

          <v-text-field
            v-model="schoolstate"
            label="What is the School State?"
            name="schoolstate"
            prepend-icon="school"
          />

          <v-text-field
            v-model="schoolstate"
            label="What is the School State?"
            name="schoolstate"
            prepend-icon="school"
          />

          <v-text-field
            v-model="schoolstate"
            label="What was the degree program for this school?"
            name="schoolstate"
            prepend-icon="school"
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
        />
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      SchoolQty: 2,
      schoolstate: '',
      schoolcity: '',
      schoolname: '',
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
