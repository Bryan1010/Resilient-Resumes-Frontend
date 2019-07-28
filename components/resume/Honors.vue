<template>
  <v-container fluid>
    <h2 class="tertiary--text">
      Honors and Achievements are important to show what you have earned during your college career.
    </h2>
    <br>
    <v-expansion-panel>
      <v-expansion-panel-content class="primary--text">
        <template v-slot:header>
          <h2 class="primary--text">
            Honors and Achievement Tips:
          </h2>
        </template>
        <v-card>
          <v-card-text>
            <span class="primary--text">Before attempting to fill in your honors and achievement, look back to all your certificates you have earned thus far in college.
            </span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>Have a short description ready for each honor and achievement, it's important for employers to understand the importance of the honor</span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>Do not forget about out of the classroom honors and achievements.<br> Be sure to list any organizational or volunteer honors given.</span>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <br>

    <v-form id="form" ref="form">
      <v-text-field
        v-model="numHonors"
        label="How many honors or achievements would you like to list?"
        name="numHonors"
        type="number"
      />

      <v-text-field

        v-model="honor"
        label="What is the name of the honor or achievement?"

        name="honor"
      />
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-textarea
            v-model="Honordesc"

            label="How would you describe this honor or achievement?"
            name="Honordesc"
            v-on="on"
          />
        </template>
        <span>Be sure to be direct with each sentence. Share the parameters to earn this honor and why you earned it. </span>
      </v-tooltip>
    </v-form>
  </v-container>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      numHonors: '',
      honor: '',
      Honordesc: ''
    }
  },
  methods: {

  }
}
</script>
