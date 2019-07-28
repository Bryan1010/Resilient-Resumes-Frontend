<template>
  <v-card>
    <v-card-text>
      <h3 class="primary--text">
        An objective statement is a short statement which describes precisely what you are looking for or what you want.
      </h3>

      <br>
      <h5>Objective Tips:</h5>

      Start with the best part you can offer.<b><i> For example, you have a driven personality.</i></b><br>
      State the position and the company your applying for. <b><i> For example, an intern at Penn State.</i></b><br>
      If putting out mass resumes simply state the position your looking to get.
      Say how your education will help you perform well for the job.
    </v-card-text>

    <v-card-text>
      <v-form id="form" ref="form">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="objectiveStatement"
              label="Enter your objective statement."
              name="objective"
              prepend-icon="work"
              v-on="on"
            />
          </template>
          <span>A great example of an objective statement is: Highly-motivated Information Science and Technology undergraduate with a 3.9 GPA looking to fill a position as a Database Intern at Google.</span>
        </v-tooltip>

        <v-text-field
          v-model="position"
          label="Enter the title of the position you are applying for"
          name="position"
          prepend-icon="work"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      objectiveStatement: '',
      position: ''
    }
  },
  methods: {

  }
}
</script>
