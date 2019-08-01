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
              <div>
                <h3 class="primary--text">
                  An objective statement is a short statement which describes precisely what you are looking for or what you want.
                </h3>

                <br>
                <h5>Objective Tips:</h5>

                Start with the best part you can offer.<b><i> For example, you have a driven personality.</i></b><br>
                State the position and the company your applying for. <b><i> For example, an intern at Penn State.</i></b><br>
                If putting out mass resumes simply state the position your looking to get.
                Say how your education will help you perform well for the job.
              </div>

              <div>
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
              </div>
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
            <div>
              <h3 class="primary--text">
                Education
              </h3>

              <br>
              <h5>Objective Tips:</h5>

              Start filling in the information with your most recent school.

              <br>Include all schools attented up to high school.

              <br>Do your best to fill all boxes.
            </div>
            <v-cart-text>
              <v-text-field
                v-model="SchoolQty"
                label="How many schools would you like on your resume?"
                name="schoolnum"
                prepend-icon="school"
              />
            </v-cart-text>
            <v-card v-for="i in Education" :key="i" xs12>
              <div>
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
              </div>
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
                  <div><span class="primary--text">Start with your strongest course, in an interview it will be the first one the interviewer sees.</span></div>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Give the course name not the course catalog number, it is more descriptive.</span><br><b><i>Organization of Data versus IST210</i></b>
                    </div>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>In the description, list the skills you learned from this course and any special projects completed.</span>
                    </div>
                  </v-container>
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

              <v-container v-for="i in RelevantCourse" :key="i">
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
                </div>
              </v-container>
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
                  <div>
                    <span class="primary--text">Consider listing all experiences including group projects, personal projects or volunteer projects if they showcase skills gained.
                    </span>
                  </div>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Use action words in short, clearly writted phrases to describe experiences.</span>
                    </div>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Avoid <i>"I was responsible for"</i>, <i>"My duties included"</i> or any other introductory phrases that deter from the main point.</span>
                    </div>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>List accomplishments whenever possible rather than just describe duties.</span>
                    </div>
                  </v-container>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <br>
            <!--Need to dynamically populate the fields based on numExp -->
            <v-form id="form" ref="form" class="px-5">
              <v-container v-for="i in Experience" :key="i">
                <!-- <v-text-field
                  v-model="numExp"
                  label="How many experiences would you like to list?"
                  name="numExp"
                  type="number"
                /> -->
                <v-divider v-if="Experience.length > 1" />
                <v-text-field
                  v-model="i.Name"
                  label="What was the name of the organization of your experience?"
                  name="Expname"
                  prepend-icon="work"
                />
                <v-combobox

                  v-model="i.Type"
                  :items="ExperienceTypes"
                  name="exptype"
                  label="What type was this experience?"
                />
                <v-text-field
                  v-model="i.City"
                  label="What was city of your experience?"
                  name="Expcity"
                />

                <v-text-field
                  v-model="i.Country"
                  label="What was the country of your experience?"
                  name="Expcountry"
                />

                <v-text-field
                  v-model="i.Position"
                  label="What was the position you held in this experience?"
                  placeholder="Software Engineering Intern"
                  name="Exppos"
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-textarea
                      v-model="i.Description"

                      label="How would you describe this experience?"
                      name="Expdesc"
                      v-on="on"
                    />
                  </template>
                  <span>Be sure to be direct with each sentence. Use action words not filler words. </span>
                </v-tooltip>
                <v-text-field
                  v-model="i.Project"

                  label="What was the name of the project with this experience?"
                  name="ProjName"
                />
                <v-textarea
                  v-model="i.ProjectDescription"

                  label="How would you describe this project Description?"
                  name="Projdesc"
                />

                <v-textarea
                  v-model="i.ProjectOutcome"

                  label="How would you describe this project and the outcome?"
                  name="Projdesc"
                />

                <v-text-field
                  v-model="i.StartDate"
                  name="startdate"
                  label="What was your start date of this experience?"
                  type="date"
                />
                <v-text-field
                  v-model="i.EndDate"
                  name="enddate"
                  label="What was your end date of this experience?"
                  type="date"
                />
                </div>
                <v-btn @click="AddExperience">
                  Add One More
                </v-btn>
              </v-container>
            </v-form>
          </v-container>
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
          <v-container fluid>
            <h2 class="tertiary--text">
              Technical skills are vital to showcase what frameworks, languages and workflows you are familiar with.
            </h2>
            <br>
            <v-expansion-panel>
              <v-expansion-panel-content class="primary--text">
                <template v-slot:header>
                  <h2 class="primary--text">
                    Technical Skills Tips:
                  </h2>
                </template>
                <v-card>
                  <div>
                    <span class="primary--text">List the skills you have utilized not only in school but in the workplace or in a research capacity.</span>
                  </div>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>The skills don't have to be the best buzzwords, be honest and do not focus on latest technologies unless you are familiar with them</span>
                    </div>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Be sure to list your level of familiarity. </span>
                    </div>
                  </v-container>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <br>

            <v-form id="form" ref="form" class="px-5">
              <!-- <v-text-field
                v-model="numSkills"
                label="How many skills would you like to list?"
                name="numSkills"
                type="number"
              /> -->

              <h3 class="primary--text">
                Languages
              </h3>
              <v-container
                v-for="i in Skill.Languages"
                :key="i"
              >
                <v-text-field

                  v-model="i.Name"
                  label="What's the Language Name?"

                  name="skill"
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-combobox

                      v-model="i.Level"
                      :items="SkillsLevel"
                      name="skillLevel"
                      label="What is your level of knowledge for this skill?"
                    />
                  </template>
                  <span>Select beginner if you just learned the skill in a class, intermediate if you have done a project in it and advanced if you are considered a resource in this area. </span>
                </v-tooltip>
                </div>
              </v-container>
              <h3 class="primary--text">
                Frameworks
              </h3>
              <v-container
                v-for="i in Skill.Frameworks"
                :key="i"
              >
                <v-text-field

                  v-model="i.Name"
                  label="What's the Language Name?"

                  name="skill"
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-combobox

                      v-model="i.Level"
                      :items="SkillsLevel"
                      name="skillLevel"
                      label="What is your level of knowledge for this skill?"
                    />
                  </template>
                  <span>Select beginner if you just learned the skill in a class, intermediate if you have done a project in it and advanced if you are considered a resource in this area. </span>
                </v-tooltip>
                </div>

                <h3 class="primary--text">
                  OS
                </h3>
                <v-container
                  v-for="i in Skill.OS"
                  :key="i"
                >
                  <v-text-field

                    v-model="i.Name"
                    label="What's the Language Name?"

                    name="skill"
                  />
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <v-combobox

                        v-model="i.Level"
                        :items="SkillsLevel"
                        name="skillLevel"
                        label="What is your level of knowledge for this skill?"
                      />
                    </template>
                    <span>Select beginner if you just learned the skill in a class, intermediate if you have done a project in it and advanced if you are considered a resource in this area. </span>
                  </v-tooltip>
                  </div>
                </v-container>
              </v-container>
            </v-form>
          </v-container>
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
                  <v-container>
                    <span class="primary--text">Before attempting to fill in your honors and achievement, look back to all your certificates you have earned thus far in college.
                    </span>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Have a short description ready for each honor and achievement, it's important for employers to understand the importance of the honor</span>
                  </v-container>
                </v-card>
                <v-card>
                  <v-container class="primary--text">
                    <span>Do not forget about out of the classroom honors and achievements.<br> Be sure to list any organizational or volunteer honors given.</span>
                  </v-container>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <br>

            <v-form id="form" ref="form">
              <v-container v-for="i in Achievements" :key="i">
                <v-text-field

                  v-model="i.Name"
                  label="What is the name of the honor or achievement?"

                  name="honor"
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-textarea
                      v-model="i.Description"

                      label="How would you describe this honor or achievement?"
                      name="Honordesc"
                      v-on="on"
                    />
                  </template>
                  <span>Be sure to be direct with each sentence. Share the parameters to earn this honor and why you earned it. </span>
                </v-tooltip>
              </v-container>
              <v-btn @click="AddAchievement()">
                Add Achievement
              </v-btn>
            </v-form>
          </v-container>
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
              <v-container
                v-for="i in Activities"
                :key="i"
                fluid
              >
                <v-text-field

                  v-model="i.Name"
                  label="What is the name of the activity"

                  name="activity"
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-textarea
                      v-model="i.Description"

                      label="How would you describe this activity?"
                      name="Actdesc"
                      v-on="on"
                    />
                  </template>
                  <span>Be sure to describe any leadership positions you served. Also, describe the impact this organization had on your community. </span>
                </v-tooltip>
              </v-container>
            </v-form>
          </v-container>
        </v-card>

        <v-btn color="secondary" class="primary--text" @click="e6 = 6">
          Previous
        </v-btn>
      </v-stepper-content>
    </v-stepper>
    <v-btn color="tertiary" class="white--text" @click="submitResume">
      Submit for Feedback
    </v-btn>
  </v-container>
</template>
<script>

// import Education from '../../../components/resume/Education'
// import Relcourse from '../../../components/resume/Relcourse'
// import Experience from '../../../components/resume/Experience'
// import Skills from '../../../components/resume/Skills'
// import Honors from '../../../components/resume/Honors'
// import Activities from '../../../components/resume/Activities'

export default {
  layout: 'dashboard',
  components: {
    // Education,
    // Relcourse,
    // Experience,
    // Skills,
    // Honors,
    // Activities
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
      ExperienceTypes: [
        'Professional',
        'Educational',
        'Research',
        'Personal',
        'Volunteer'
      ],
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
      },
      SkillsLevel: [
        'Learning',
        'Beginner',
        'Intermediate',
        'Advanced'
      ]
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
      const skillFramework = this.Skill.Frameworks.map((item) => {
        const container = {}

        container.Name = item.Name
        if (item.Level === 'Learning') {
          container.Level = 0
        } else if (item.Level === 'Beginner') {
          container.Level = 1
        } else if (item.Level === 'Intermediate') {
          container.Level = 2
        } else if (item.Level === 'Advanced') {
          container.Level = 3
        } else {
          container.Level = 0
        }

        return container
      })
      const skillLanguages = this.Skill.Languages.map((item) => {
        const container = {}

        container.Name = item.Name
        if (item.Level === 'Learning') {
          container.Level = 0
        } else if (item.Level === 'Beginner') {
          container.Level = 1
        } else if (item.Level === 'Intermediate') {
          container.Level = 2
        } else if (item.Level === 'Advanced') {
          container.Level = 3
        } else {
          container.Level = 0
        }

        return container
      })
      const skillOS = this.Skill.OS.map((item) => {
        const container = {}

        container.Name = item.Name
        if (item.Level === 'Learning') {
          container.Level = 0
        } else if (item.Level === 'Beginner') {
          container.Level = 1
        } else if (item.Level === 'Intermediate') {
          container.Level = 2
        } else if (item.Level === 'Advanced') {
          container.Level = 3
        } else {
          container.Level = 0
        }

        return container
      })
      const resumeID = await this.$axios.post('/api/resume/create',
        {
          _Userid: this.$store.state.login.auth,
          ObjectiveStatement: this.ObjectiveStatement,
          PositionApplyingFor: this.PositionApplyingFor,
          Achievements: this.Achievements,
          Activities: this.Activities,
          Experience: this.Experience,
          RelevantCourse: this.RelevantCourse,
          Skill: {
            Frameworks: skillFramework,
            Languages: skillLanguages,
            OS: skillOS
          },
          School: this.Education
        }
      )

      if (resumeID.status >= 200 && resumeID.status < 300) {
        // eslint-disable-next-line no-console
        console.log(resumeID)
      }

      return resumeID
    },
    AddSchool() {
      this.Education.push(
        {
          Minor: '',
          Major: '',
          Name: '',
          Gpa: '',
          Country: '',
          City: '',
          State: '',
          Graduation: ''
        }
      )
      this.SchoolQty++
    },
    AddCourse() {
      this.RelevantCourse.push({
        Name: '',
        Description: ''
      })
    },
    AddExperience() {
      this.Experience.push({
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
      })
    },
    AddSkill(subsetName) {
      if (subsetName === 'Frameworks') {
        this.Skill.Frameworks.push(
          {
            Name: '',
            Level: 1
          }
        )
      } else if (subsetName === 'Languages') {
        this.Skill.Languages.push({
          Name: '',
          Level: 1
        })
      } else if (subsetName === 'OS') {
        this.Skill.OS.push({
          Name: '',
          Level: 1
        })
      }
    },
    AddAchievement(subsetName) {
      this.Achievements.push({
        Name: '',
        Description: ''
      })
    }

  }
}
</script>
