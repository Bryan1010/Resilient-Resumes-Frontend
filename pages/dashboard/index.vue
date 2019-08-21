<template>
  <v-container grid-list-md>
    <v-layout>
      <h1>Your Resumes</h1>
      <v-spacer />
      <v-btn
        dark
        outline
        to="/dashboard/resume/create"
      >
        <v-icon>note_add</v-icon>
        New resume
      </v-btn>
    </v-layout>
    <v-layout wrap>
      <v-flex v-for="resume in resumes.length " :key="resume " xs6>
        <ResumeCard
          :resume="resumes[resume - 1]"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios'
import ResumeCard from '../../components/resume/ResumeCard'

export default {
  layout: 'dashboard',
  components: { ResumeCard },
  data() {
    return {
      resumes: []
    }
  },
  mounted() {
    this.$axios
      .get('/api/resume/all/card',
        {
          params: {
            _id: this.$store.state.login.auth
          }
        }
      ).then((response) => {
        this.resumes = response.data.dbResumes
      })
  }
}
</script>
