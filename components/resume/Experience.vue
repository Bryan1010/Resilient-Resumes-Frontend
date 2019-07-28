<template>
  <v-container fluid>
    <h2 class="tertiary--text">
      Experience is important to showcase your strengths and what you have learned during your college career.
    </h2>

    <br>
    <v-expansion-panel>
      <v-expansion-panel-content class="primary--text">
        <template v-slot:header>
          <h2 class="primary--text">
            Experience Tips:
          </h2>
        </template>
        <v-card>
          <v-card-text>
            <span class="primary--text">Consider listing all experiences including group projects, personal projects or volunteer projects if they showcase skills gained.
            </span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>Use action words in short, clearly writted phrases to describe experiences.</span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>Avoid <i>"I was responsible for"</i>, <i>"My duties included"</i> or any other introductory phrases that deter from the main point.</span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>List accomplishments whenever possible rather than just describe duties.</span>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <br>
    <!--Need to dynamically populate the fields based on numExp -->

    <v-form id="form" ref="form" class="px-5">
      <v-text-field
        v-model="numExp"
        label="How many experiences would you like to list?"
        name="numExp"
        type="number"
      />
      <v-text-field
        v-model="Expname"
        label="What was the name of the organization of your experience?"
        name="Expname"
        prepend-icon="work"
      />
      <v-combobox

        v-model="Expdegree"
        :items="items"
        name="exptype"
        label="What type was this experience?"
      />
      <v-text-field
        v-model="Expcity"
        label="What was city of your experience?"
        name="Expcity"
      />

      <v-text-field
        v-model="Expcountry"
        label="What was the country of your experience?"
        name="Expcountry"
      />

      <v-text-field
        v-model="Exppos"
        label="What was the position you held in this experience?"
        placeholder="Software Engineering Intern"
        name="Exppos"
      />
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-textarea
            v-model="Expdesc"

            label="How would you describe this experience?"
            name="Expdesc"
            v-on="on"
          />
        </template>
        <span>Be sure to be direct with each sentence. Use action words not filler words. </span>
      </v-tooltip>
      <v-text-field
        v-model="ProjAns"

        label="Did you complete a project with this experience?"
        name="ProjAns"
      />
      <v-text-field
        v-model="ProjName"

        label="What was the name of the project with this experience?"
        name="ProjName"
      />
      <v-textarea
        v-model="Projdesc"

        label="How would you describe this project and the outcome?"
        name="Projdesc"
      />

      <v-text-field
        v-model="startdate"
        name="startdate"
        label="What was your start date of this experience?"
        type="date"
      />
      <v-text-field
        v-model="enddate"
        name="enddate"
        label="What was your end date of this experience?"
        type="date"
      />
    </v-form>
  </v-container>
</template>

<script>

export default {
  components: { },
  data() {
    return {

      numExp: '',
      Expname: '',
      Expcity: '',
      Expcountry: '',
      Exppos: '',
      Expdegree: '',
      Expdesc: '',
      ProjAns: '',
      ProjName: '',
      Projdesc: '',
      startdate: '',
      enddate: '',
      items: [
        'Professional Work',
        'Educational',
        'Research',
        'Personal Growth',
        'Volunteer'
      ]

    }
  },
  methods: {

  }
}
</script>
