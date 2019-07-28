<template>
  <v-container fluid>
    <h2 class="tertiary--text">
      Activities showcase to an employer your ability to be a well-rounded potential employee.
    </h2>
    <br>
    <v-expansion-panel>
      <v-expansion-panel-content class="primary--text">
        <template v-slot:header>
          <h2 class="primary--text">
            Activities Tips:
          </h2>
        </template>
        <v-card>
          <v-card-text>
            <span class="primary--text">All organizational memberships are important to highlight in this section.
            </span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>Be sure to remember to include on and off campus activities.</span>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text class="primary--text">
            <span>If you served at a leadership level, be sure to mention in the first sentence of your description.</span>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <br>

    <v-form id="form" ref="form">
      <v-text-field
        v-model="numActivities"
        label="How many activities would you like to list?"
        name="numActivities"
        type="number"
      />

      <v-text-field

        v-model="activity"
        label="What is the name of the activity"

        name="activity"
      />
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-textarea
            v-model="Actdesc"

            label="How would you describe this activity?"
            name="Actdesc"
            v-on="on"
          />
        </template>
        <span>Be sure to describe any leadership positions you served. Also, describe the impact this organization had on your community. </span>
      </v-tooltip>
    </v-form>
  </v-container>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      numActivities: '',
      activity: '',
      Actdesc: ''
    }
  },
  methods: {

  }
}
</script>
