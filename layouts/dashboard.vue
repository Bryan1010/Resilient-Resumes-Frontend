<template>
  <v-card height="350px">
    <v-navigation-drawer
      v-model="drawer"
      permanent
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="picture.gravatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Hi {{ picture.FirstName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider />

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard', link: '/dasboard' },
        { title: 'About', icon: 'question_answer', link: '/resume/new' }
      ],
      mini: true,
      right: null,
      pictures: ''
    }
  },
  computed: mapGetters({
    picture: 'login/get'
  })
}
</script>
