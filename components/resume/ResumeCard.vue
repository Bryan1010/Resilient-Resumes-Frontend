<template>
  <v-card>
    <v-card-title>
      {{ resume.PositionApplyingFor }}
      <v-spacer />
      <v-btn :to="{path: `/dashboard/resume/feedback/${resume._id}`}">
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
          <v-btn disabled @click="DownloadResume">
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
import axios from 'axios'

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
    DownloadResume: function () {
      axios.get(`/api/resume/downloadLink/${this.resume._id}`,
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

        functionData.set('address', JSON.stringify(dbaddress)
        )
        axios(
          {
            method: 'post',
            url: 'https://resilientresumes-functions.azurewebsites.net/api/resumeanalysis',
            responseType: 'blob',
            config: { headers: { 'Content-Type': 'multipart/form-data' } },
            data: functionData

          }
        ).then(function (res) {
          // eslint-disable-next-line no-console
          console.log(res)
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
