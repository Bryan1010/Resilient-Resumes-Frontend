<template>
  <v-card>
    <v-card-title>
      {{ resume.PositionApplyingFor }}
    </v-card-title>
    <v-card-text>
      <p>
        {{ resume.ObjectiveStatement }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="editResumeLink">
        <v-icon left>
          edit
        </v-icon>
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {

    resume: {
      type: Object,
      default: function () {
        return {
          _id: String,
          PositionApplyingFor: String,
          ObjectiveStatement: String
        }
      }
    }
  },
  computed: {
    editResumeLink: function () {
      return 'resume/' + this.resume._id
    }
  }
}
</script>
