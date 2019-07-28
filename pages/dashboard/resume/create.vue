<template>
  <v-container>
    <v-stepper
      v-model="stepper"
      :vertical="true"
    >
      <v-stepper-step
        :coplete="stepper > 1"
        step="1"
        editable="true"
      >
        Enter your Objective Statement
      </v-stepper-step>
      <v-stepper-content
        step="1"
      >
        <Objective />

        <v-btn
          color="primary"
          @click="nextStep(n)"
        >
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
<script>
import Objective from '../../../components/Objective'
export default {
  layout: 'dashboard',
  components: { Objective },
  data() {
    return {
      stepper: 1,
      MaxStep: 2
    }
  },
  methods: {
    nextStep: function (n) {
      if (n === this.MaxStep) {
        return n
      } else {
        this.stepper = n + 1
      }
    }
  }
}
</script>
