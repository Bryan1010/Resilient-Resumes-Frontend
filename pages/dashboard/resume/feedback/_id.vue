<template>
  <v-container>
    <h1 class="primary--text">
      Resume Feedback
    </h1>
    <h2 class="primary--text">
      Overall Score:
      <span v-if="feedback.Overall_Rating > 0">
        {{ getGrade(feedback.Overall_Rating) }}
      </span>
      <span v-else>Loading</span>
    </h2>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Objective Statement
        </h2>
      </v-card-title>
      <v-card-text>
        <p>
          {{ resume.ObjectiveStatement }}
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Position Applying For
        </h2>
      </v-card-title>
      <v-card-text>
        <p>
          {{ resume.PositionApplyingFor }}
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Education
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Edu_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Edu_Final }}
        </p>
        <v-divider />
        <v-container v-for="(i, index) in resume.School" :key="index">
          <v-divider v-if="index > 0" />
          <ul>
            <li>
              School Name: {{ i.Name }}
            </li>
            <li>
              Major: {{ i.Major }}
            </li>
            <li v-if="i.Minor">
              Minor: {{ i.Minor }}
            </li>
            <li v-if="i.Gpa">
              Gpa: {{ i.Gpa }}
            </li>
            <li v-if="i.Graduation">
              Graduation Date: {{ i.Graduation }}
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Experience
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Exp_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Exp_Final }}
        </p>
        <v-divider />
        <v-container v-for="(i, index) in resume.Experience" :key="index">
          <v-divider v-if="index > 0" />
          <ul>
            <li>
              Name: {{ i.Name }}
            </li>
            <li>
              Type: {{ i.Type }}
            </li>
            <li>
              Position: {{ i.Position }}
            </li>
            <li v-if="i.Project">
              Project: {{ i.Project }}
            </li>
            <li v-if="i.ProjectDescription">
              Project Description: {{ i.ProjectDescription }}
            </li>
            <li v-if="i.ProjectOutcome">
              Project Outcome: {{ i.ProjectOutcome }}
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Skills
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Skill_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Ski_Final }}
        </p>
        <v-divider />
        <v-container>
          <p class="primary--text">
            Frameworks
          </p>
          <ul v-for="(i, index) in resume.Skill.Frameworks" :key="index">
            <li>
              Name: {{ i.Name }}
            </li>
            <li>
              Type: {{ GetSkillLevel( i.Level ) }}
            </li>
            <v-divider v-if="index > 0" />
            </li>
          </ul>
          <v-divider />

          <p class="primary--text">
            Languages
          </p>
          <ul v-for="(i, index) in resume.Skill.Languages" :key="index">
            <li>
              Name: {{ i.Name }}
            </li>
            <li>
              Type: {{ GetSkillLevel( i.Level ) }}
            </li>
            <v-divider v-if="index > 0" />
            </li>
          </ul>
          <v-divider />

          <p class="primary--text">
            OS
          </p>
          <ul v-for="(i, index) in resume.Skill.OS" :key="index">
            <li>
              Name: {{ i.Name }}
            </li>
            <li>
              Type: {{ GetSkillLevel( i.Level ) }}
            </li>
            <v-divider v-if="index > 0" />
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Activities
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Act_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Act_Final }}
        </p>
        <v-divider />
        <v-container v-for="(i, index) in resume.Activities" :key="index">
          <v-divider v-if="index > 0" />
          <ul>
            <li>
              Name: {{ i.Name }}
            </li>
            <li v-if="i.Description">
              Graduation Date: {{ i.Description }}
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Activities
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Act_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Act_Final }}
        </p>
        <v-divider />
        <v-container v-for="(i, index) in resume.Activities" :key="index">
          <v-divider v-if="index > 0" />
          <ul>
            <li>
              Name: {{ i.Name }}
            </li>
            <li v-if="i.Description">
              Description: {{ i.Description }}
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h2 class="primary--text">
          Achievements
        </h2>
        <v-spacer />
        <h2 class="primary--text">
          <b>Grade:</b> {{ getGrade(feedback.Award_Rating) }}
        </h2>
      </v-card-title>
      <v-card-text>
        <p class="primary--text">
          <b>Feedback:</b> {{ feedback.Award_Final }}
        </p>
        <v-divider />
        <v-container v-for="(i, index) in resume.Activities" :key="index">
          <v-divider v-if="index > 0" />
          <ul>
            <li>
              Name: {{ i.Name }}
            </li>
            <li v-if="i.Description">
              Description: {{ i.Description }}
            </li>
          </ul>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'dashboard',
  validate({ params }) {
    return params.id !== null && params.id !== ''
  },
  data() {
    return {
      feedback: {
        Edu_Rating: 0,
        Skill_Rating: 0,
        Exp_Rating: 0,
        Act_Rating: 0,
        Award_Rating: 0,
        Overall_Rating: 0,
        Edu_Final: 'Loading',
        Ski_Final: 'Loading',
        Exp_Final: 'Loading',
        Act_Final: 'Loading',
        Award_Final: 'Loading'
      },
      resume: {
        Name: {
          FName: String,
          LName: String,
          Suffix: String
        },
        Skill: {
          Frameworks: [
            {
              _id: String,
              Name: String,
              Level: Number
            }
          ],
          Languages: [
            {
              _id: String,
              Name: String,
              Level: Number
            }
          ],
          OS: [
            {
              _id: String,
              Name: String,
              Level: Number
            }
          ]
        },
        _id: String,
        ObjectiveStatement: String,
        PositionApplyingFor: String,
        Achievements: [
          {
            _id: String,
            Name: String,
            Description: String
          }
        ],
        Activities: [
          {
            _id: String,
            Name: String,
            Description: String
          }
        ],
        Experience: [
          {
            _id: String,
            City: String,
            State: String,
            Country: String,
            Description: String,
            StartDate: String,
            EndDate: String,
            Name: String,
            Position: String,
            Project: String,
            ProjectDescription: String,
            ProjectOutcome: String,
            Type: String
          }
        ],
        RelevantCourse: [
          {
            _id: String,
            Name: String,
            Description: String
          }
        ],
        School: [
          {
            _id: String,
            Minor: String,
            Major: String,
            Name: String,
            Gpa: String,
            Country: String,
            City: String,
            State: String,
            Graduation: null
          }
        ],
        User: String,
        CreatedOn: String,
        __v: Number,
        'Objective Statement': String
      }
    }
  },
  async mounted() {
    const feedback = {}
    const resume = await axios.post(`/api/resume/${this.$route.params.id}/getFeedback`,
      {
        _Userid: this.$store.state.login.auth,
        params: {
          _id: this.$store.state.login.auth
        }
      }
    )

    this.resume = resume.data

    const functionData = new FormData()

    functionData.set('resume', JSON.stringify(resume.data))
    const azure = await axios(
      {
        method: 'post',
        url: 'https://resilientresumes-functions.azurewebsites.net/api/resumeanalysis',
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
        data: functionData
      }
    )
    feedback.Act_Final = parseInt(azure.data.Act_Final)
    feedback.Act_Rating = parseFloat(azure.data.Act_Rating)

    feedback.Award_Final = parseInt(azure.data.Award_Final)
    feedback.Award_Rating = parseFloat(azure.data.Award_Rating)

    feedback.Edu_Final = parseInt(azure.data.Edu_Final)
    feedback.Edu_Rating = parseFloat(azure.data.Edu_Rating)

    feedback.Ski_Final = parseInt(azure.data.Ski_Final)
    feedback.Skill_Rating = parseFloat(azure.data.Skill_Rating)

    feedback.Exp_Final = parseInt(azure.data.Exp_Final)
    feedback.Exp_Rating = parseFloat(azure.data.Exp_Rating)

    feedback.Overall_Rating = parseFloat(azure.data.Overall_Rating)

    this.feedback.Act_Final = this.activityFeedback(feedback.Act_Final)
    this.feedback.Act_Rating = (feedback.Act_Rating / 7)

    this.feedback.Award_Final = this.awardFeedback(feedback.Award_Final)
    this.feedback.Award_Rating = (feedback.Award_Rating / 7)

    this.feedback.Edu_Final = this.educationFeedback(feedback.Edu_Final)
    this.feedback.Edu_Rating = feedback.Edu_Rating / 7

    this.feedback.Ski_Final = this.skillFeedback(feedback.Ski_Final)
    this.feedback.Skill_Rating = feedback.Skill_Rating / 7

    this.feedback.Exp_Final = this.experienceFeedback(feedback.Exp_Final)
    this.feedback.Exp_Rating = feedback.Exp_Rating / 7

    this.feedback.Overall_Rating = feedback.Overall_Rating / 7
  },
  methods: {
    educationFeedback(val) {
      switch (val) {
        case 1:
          return 'No high school information is needed in the creation of your resume, unless you are currently a high school student. Most employers prefer to know your performance in college rather than your status in high school. Since most employers want to know your standings in college, we recommend not to include your high school information.'
        case 2:
          return 'Highlight the courses that are relevant to your major and specify your experience from the courses that are relevant to the company. Do your best to summarize your experience in each course in one sentence.'
        case 3:
          return 'Exceptional information on your education was given. No changes are necessary, keep up the great work!'
        case 4:
          return 'Your education section must be reviewed an improved upon. All input must be filled in so companies are able to note the important aspects of academic career with ease. It’s extremely important that companies  know what you learned in a concise format. GPA must be stated, especially if your GPA is above 3.0. If your GPA is above 3.0, you must works towards attaining a 3.0 GPA. We understand that your courses are difficult, but companies want to see success in their future  employees. Additionally, highlight the courses that are relevant to your major and specify your experience from the course'
      }
    },
    objectiveFeedback(val) {
      switch (val) {
        case 1:
          return 'The objective statement you stated seems to be too broad and vague.  The objective statement of a resume is typically one or two sentences long. Try working on a more concise objective statement that highlights exactly what you want. The most effective objective statement is tailored to the job you are applying for.'
        case 2:
          return 'The objective statement needs to be more specific to the position you want and the prospective employer. The most effective objective statement is tailored to the job you are applying for.'
        case 3:
          return 'Exceptional input on the objective statement that was given. Your objective statement was concise and specific, keep up the great work!'
        case 4:
          return 'The objective statement must be reviewed and should be improved upon. The objective statement of a resume is typically one or two sentences long. Try working on a more concise objective statement that highlights exactly what you want. The most effective objective statement is tailored to the job you are applying for.'
      }
    },
    experienceFeedback(val) {
      switch (val) {
        case 1:
          return 'Highlight the role you had within the company. It’s crucial that companies know what you did within your job and what you’ve done for the company. Employers use this information to relate you to a future position.'
        case 2:
          return 'Use strong action words to show your impact within the company. Companies want to know your success within the company. For examples, words such as (achieved, enhanced, and resolved) are possible alternatives.'
        case 3:
          return 'Include more details about your experience within the company such as the date, responsibilities, and the impact you had on the company. It’s crucial that companies know the specific details within your job. Employers use this information to relate you to a future position.'
        case 4:
          return 'Exceptional information on the experience that was given. No changes are necessary and keep up the great work!'
      }
    },
    skillFeedback(val) {
      switch (val) {
        case 1:
          return 'Don’t include as much emphasis on common skills such as Microsoft Word. Most employers have already expected future employees to have these common skills. Highlight on the skills that you think most others don’t have'
        case 2:
          return 'Soft skills are asked of every employee. Employers do already expect that you have the soft skills stated. State more technical skills that employers will find valuable to their company.'
        case 3:
          return 'Work on skills that are relevant to your major or career goals. Companies want to hire applicants that take an excess amount of time in hiring. It’s crucial to work on skills geared towards your career goals to benefit your chances of getting the job. If you have an idea of what company you want to work for; go on the company web site to research what new skills their implementing. Additionally, research specific skills previous employers think are the most important'
        case 4:
          return 'Exceptional information on the skills that were given. No changes are necessary and keep up the great work!'
      }
    },
    activityFeedback(val) {
      switch (val) {
        case 1:
          return 'Input the role you had in the activity within the organization. It’s crucial that companies know what you did within the organization. This is information they use to relate you to a future position.'
        case 2:
          return 'Try to steer your involvement to activities that are relevant to your prospective field or major. Academics are not the only factor when deciding for a position within a company. Companies love to get students who can master both academic and involvement within their community'
        case 3:
          return 'Include more activities to show highlight your involvement. Academics are not the only factor when deciding a position within a company. Companies love to get student who can master both academic and involvement within their community.'
        case 4:
          return 'Exceptional information on the activities that were given. No changes are necessary and keep up the great work!'
      }
    },
    awardFeedback(val) {
      switch (val) {
        case 1:
          return 'It can be very difficult throughout you career to get an award. Keep working towards attaining any awards in your field or that are noteworthy. If you have attained an ward, list any that you have attained.'
        case 2:
          return 'Include more details about the award(s) you have attained. Employers want to know more about the achievement and why you deserved it.'
        case 3:
          return 'Quantify the difficulty the award is to receive. If you are unable to quantify, research the award and find how many are chosen for the award.'
        case 4:
          return 'Exceptional information on the awards was input. No changes to be made and keep up the great work!'
      }
    },
    getGrade(val) {
      const percentage = (val * 100).toFixed(2)

      if (percentage > 90) {
        return percentage + '% A'
      } else if (percentage > 80) {
        return percentage + '% B'
      } else if (percentage > 70) {
        return percentage + '% C'
      } else if (percentage > 60) {
        return percentage + '% D'
      } else return percentage + '% F'
    },
    GetSkillLevel(val) {
      const skillLevel = [
        'Learning',
        'Beginner',
        'Intermediate',
        'Advanced'
      ]
      return skillLevel[val]
    }

  }
}

</script>
