<template>
  <v-card>
    <v-card-title>
      Resume Title
    </v-card-title>
    <v-card-actions>
      <v-btn>
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
  data() {
    return {
      resume: {}
    }
  }
}
</script>
