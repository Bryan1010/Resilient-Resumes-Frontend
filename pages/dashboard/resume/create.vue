<template>
  <v-container>
    <v-stepper id="resume" v-model="e6" vertical class="mt-5 py-5 px-5 mx-5">
      <h1 class="tertiary--text">
        Answer following questions to build your Resilient Resume.
      </h1>
      <v-stepper-step
        :complete="e6 > 1"
        step="1"
        editable
      >
        Enter your Objective Statement
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="white" height="auto" class="px-5">
          <v-container lg12 md8 xs4>
            <Objective
              :statement="ObjectiveStatement"
              :position="PositionApplyingFor"
            />
          </v-container>
        </v-card>
        <v-btn color="primary" router to="/welcome">
          Home
        </v-btn>

        <v-btn color="tertiary" class="white--text" @click="e6 = 2">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 2"
        step="2"
        editable
      >
        Enter your Education
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="white" height="auto" class="px-5">
          <Education />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 1">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 3">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 3"
        step="3"
        editable
      >
        Relevant Coursework
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="white" height="auto" class="px-5">
          <Relcourse />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 2">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 4">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 4"
        step="4"
        editable
      >
        Experience
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="white" height="auto" class="px-5">
          <Experience />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 3">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 5">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 5"
        step="5"
        editable
      >
        Technical Skills
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card color="white" height="auto" class="px-5">
          <Skills />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 4">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 6">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 6"
        step="6"
        editable
      >
        Honors and Achievements
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-card color="white" height="auto" class="px-5">
          <Honors />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 5">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text" @click="e6 = 7">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="e6 > 7"
        step="7"
        editable
      >
        Activities
      </v-stepper-step>
      <v-stepper-content step="7">
        <v-card color="white" height="auto" class="px-5">
          <Activities />
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 6">
          Previous
        </v-btn>
        <v-btn color="tertiary" class="white--text">
          Submit for Feedback
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
<script>
import Objective from '../../../components/Objective'
import Education from '../../../components/resume/Education'
import Relcourse from '../../../components/resume/Relcourse'
import Experience from '../../../components/resume/Experience'
import Skills from '../../../components/resume/Skills'
import Honors from '../../../components/resume/Honors'
import Activities from '../../../components/resume/Activities'

export default {
  layout: 'dashboard',
  components: {
    Objective,
    Education,
    Relcourse,
    Experience,
    Skills,
    Honors,
    Activities
  },
  data() {
    return {
      e6: 1,
      MaxStep: 2,
      ObjectiveStatement: '',
      PositionApplyingFor: '',
      Achievements: [{
        Name: '',
        Description: ''
      }],
      Activities: [{
        Name: '',
        Description: ''
      }],
      Experience: [{
        City: '',
        State: '',
        Country: '',
        Description: '',
        StartDate: Date,
        EndDate: '', // It's a string because it can be the PRESENT. We need to check that if it's a date or a string before Displaying
        Name: '',
        Position: '',
        Project: '',
        ProjectDescription: '',
        ProjectOutcome: '',
        Type: ''
      }],
      RelevantCourse: [{
        Name: '',
        Description: ''
      }],
      Skill: {
        Languages: [{
          Name: '',
          Level: 1
        }],
        Frameworks: [{
          Name: '',
          Level: 1
        }],
        OS: [{
          Name: '',
          Level: 1
        }]
      }
    }
  },
  methods: {
    nextStep: function (n) {
      if (n === this.MaxStep) {
        return n
      } else {
        this.e6 = n + 1
      }
    },
    async submitResume() {
      const resumeID = await this.$axios.post('/api', {
        _Userid: this.$store.state.login.auth,
        ObjectiveStatement: this.ObjectiveStatement,
        PositionApplyingFor: this.PositionApplyingFor,
        Achievements: this.Achievements,
        Activities: this.Activities,
        Experience: this.Experience,
        RelevantCourse: this.RelevantCourse,
        Skill: this.Skill

      })

      return resumeID
    }
  }
}
</script>
