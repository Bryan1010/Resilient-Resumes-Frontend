<template>
  <nav>
    <v-toolbar floating flat class="transparent" app>
      <v-toolbar-side-icon class="white--text" @click="drawer=!drawer" />
      <a class="transparent" href="/"><img class="mt-5" src="~/assets/ResilientResumes.png" height="85"></a>

      <v-spacer />

      <v-navigation-drawer v-model="drawer" app class="primary" />
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false

    }
  }
}
</script>
<style>
 </style>
