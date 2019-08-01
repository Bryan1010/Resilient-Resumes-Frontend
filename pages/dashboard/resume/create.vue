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
          <!-- Objective component -->
          <v-container lg12 md8 xs4>
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
                        v-model="ObjectiveStatement"
                        label="Enter your objective statement."
                        name="objective"
                        prepend-icon="work"
                        v-on="on"
                      />
                    </template>
                    <span>A great example of an objective statement is: Highly-motivated Information Science and Technology undergraduate with a 3.9 GPA looking to fill a position as a Database Intern at Google.</span>
                  </v-tooltip>

                  <v-text-field
                    v-model="PositionApplyingFor"
                    label="Enter the title of the position you are applying for"
                    name="position"
                    prepend-icon="work"
                  />
                </v-form>
              </v-card-text>
            </v-card>
          </v-container>
          <!-- End Objective Component -->
        </v-card>

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
          <v-layout
            wrap
            align-center
            row
          >
            <v-card-text>
              <h3 class="primary--text">
                Education
              </h3>

              <br>
              <h5>Objective Tips:</h5>

              Start filling in the information with your most recent school.

              <br>Include all schools attented up to high school.

              <br>Do your best to fill all boxes.
            </v-card-text>
            <v-cart-text>
              <v-text-field
                v-model="SchoolQty"
                label="How many schools would you like on your resume?"
                name="schoolnum"
                prepend-icon="school"
              />
            </v-cart-text>
            <v-card v-for="i in Education" :key="i" xs12>
              <v-card-text>
                <v-form id="form" ref="form">
                  <v-text-field
                    v-model="i.Name"
                    label="What is the School name?"
                    name="schoolname"
                    prepend-icon="school"
                  />

                  <v-text-field
                    v-model="i.City"
                    label="What is the School City?"
                    name="schoolcity"
                    prepend-icon="school"
                  />

                  <v-text-field
                    v-model="i.State"
                    label="What is the School State?"
                    name="schoolstate"
                    prepend-icon="school"
                  />

                  <v-text-field
                    v-model="i.Country"
                    label="What is the School Country?"
                    name="schoolstate"
                    prepend-icon="school"
                  />

                  <v-text-field
                    v-model="i.Major"
                    label="What was the Major for this school?"
                    name="schoolstate"
                    prepend-icon="school"
                  />

                  <v-text-field
                    v-model="i.Minor"
                    label="What was the Minor for this school?"
                    name="schoolstate"
                    prepend-icon="school"
                  />

                  <v-combobox
                    v-model="i.DegreeType"
                    :items="DegreeTypes"
                    name="degreetype"
                    label="Select your degree for this school"
                  />

                  <v-text-field
                    v-model="i.Gpa"
                    label="GPA"
                    name="schoolstate"
                    prepend-icon="school"
                  />
                </v-form>
              </v-card-text>
            </v-card>
          </v-layout>
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
        <v-card color="white" height="auto">
          <v-container fluid>
            <h2 class="tertiary--text">
              Relevant Courses are the courses that contribute to the advancement of your career.
            </h2>
            <br>
            <v-expansion-panel>
              <v-expansion-panel-content class="primary--text">
                <template v-slot:header>
                  <h2 class="primary--text">
                    Relevant Coursework Tips:
                  </h2>
                </template>
                <v-card>
                  <v-card-text><span class="primary--text">Start with your strongest course, in an interview it will be the first one the interviewer sees.</span></v-card-text>
                </v-card>
                <v-card>
                  <v-card-text class="primary--text">
                    <span>Give the course name not the course catalog number, it is more descriptive.</span><br><b><i>Organization of Data versus IST210</i></b>
                  </v-card-text>
                </v-card>
                <v-card>
                  <v-card-text class="primary--text">
                    <span>In the description, list the skills you learned from this course and any special projects completed.</span>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <br>

            <!--Need to dynamically populate fields based on number input of numCourse-->
            <v-form ref="RelCourseForm">
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <!-- <v-text-field
                    v-model="numCourse"
                    label="How many courses would you like to list?"
                    name="numCourse"
                    type="number"

                    v-on="on"
                  /> -->
                  <v-btn @click="AddCourse()">
                    Add Course
                  </v-btn>
                </template>
                <span>Only count career relevant courses, most interviewers will not care about basketweaving.</span>
              </v-tooltip>

              <v-card-text v-for="i in RelevantCourse" :key="i">
                <v-text-field
                  v-model="i.Name"
                  label="What is the name of the course?"
                  name="courseName"
                  prepend-icon="book"
                />

                <v-textarea
                  v-model="i.Description"
                  label="How would you describe the above course?"
                  name="courseDesc"
                  prepend-icon="book"
                />
              </v-card-text>
            </v-form>
            <v-btn @click="AddCourse()">
              Add Course
            </v-btn>
          </v-container>
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

// import Education from '../../../components/resume/Education'
// import Relcourse from '../../../components/resume/Relcourse'
import Experience from '../../../components/resume/Experience'
import Skills from '../../../components/resume/Skills'
import Honors from '../../../components/resume/Honors'
import Activities from '../../../components/resume/Activities'

export default {
  layout: 'dashboard',
  components: {
    // Education,
    // Relcourse,
    Experience,
    Skills,
    Honors,
    Activities
  },
  data() {
    return {
      e6: 1,
      MaxStep: 2,
      Education: [{
        Minor: '',
        Major: '',
        Name: '',
        Gpa: '',
        Country: '',
        City: '',
        State: '',
        Graduation: '',
        DegreeType: ''
      }],
      DegreeTypes: [
        'PHD',
        'Masters',
        'Bachelors',
        'Associates',
        'Certificate'
      ],
      SchoolQty: 1,
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
    },
    AddSchool() {
      this.Education.push(
        {
          Minor: String,
          Major: String,
          Name: String,
          Gpa: String,
          Country: String,
          City: String,
          State: String,
          Graduation: String
        }
      )
      this.SchoolQty++
    },
    AddCourse() {
      this.RelevantCourse.push({
        Name: '',
        Description: ''
      })
    }

  }
}
</script>
