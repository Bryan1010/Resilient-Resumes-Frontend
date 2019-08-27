<template>
  <v-card>
    <v-card-title>
      {{ resume.PositionApplyingFor }}
      <v-spacer />
      <v-btn
        outline
        :to="{path: `/dashboard/resume/feedback/${resume._id}`}"
      >
        Feedback
      </v-btn>
    </v-card-title>
    <v-card-text>
      <p>
        {{ resume.ObjectiveStatement }}
      </p>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn :to="editResumeLink">
        <v-icon left>
          edit
        </v-icon>
        Edit
      </v-btn> -->
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            outline

            @click="DownloadResume"
          >
            <v-icon left>
              cloud_download
            </v-icon>
            Download Resume
          </v-btn>
        </template>
        <span>Coming Soon</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
const jsDownload = require('js-file-download')

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
  data() {
    return {}
  },
  computed: {
    editResumeLink: function () {
      return 'dashboard/resume/' + this.resume._id
    }
  },
  methods: {
    DownloadResume: async function () {
      await this.$axios.get(`/api/resume/downloadLink/${this.resume._id}`,
        {
          params: {
            _id: this.$store.state.login.auth
          }
        }
      ).then((response) => {
        const dbaddress = {
          Primary: 1,
          Address: { Line1: '', Line2: '', City: '', State: '', Zip: '', Country: '' }
        }
        const functionData = new FormData()
        functionData.set('user', response.data.user)
        functionData.set('resume', response.data.resume)

        functionData.set('address', JSON.stringify(dbaddress))

        const address = JSON.parse(response.data.address)
        const resume = JSON.parse(response.data.resume)
        const wordData = {
          resume: resume,
          user: JSON.parse(response.data.user),
          address: {
            Primary: 1,
            Address: {
              Line1: address.Line1,
              Line2: address.Line2,
              City: address.City,
              State: address.State,
              Zip: address.Zip,
              Country: 'USA'
            }
          }
        }

        wordData.resume.Experience.forEach((element) => {
          element.StartDate = moment(element.StartDate).format('MMMM, YYYY')
          element.EndDate = moment(element.EndDate).format('MMMM, YYYY')
        })

        wordData.resume.School.forEach((element) => {
          element.Graduation = moment(element.StartDate).format('MMMM, YYYY')
        })

        this.$axios.post(
          {
            method: 'post',
            url: 'https://resilientresumes-functions.azurewebsites.net/api/ResilientResumeBody',
            responseType: 'blob',
            config: { headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' } },
            data: wordData

          }
        ).then(function (res) {
          jsDownload(res.data, 'resume.docx')
        })
          .catch(function (response) {
            // handle error
            // eslint-disable-next-line no-console
            console.log(response)
          })
      })
    }
  }
}
</script>
