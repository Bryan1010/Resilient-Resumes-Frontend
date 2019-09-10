<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      fixed
      app
      color="primary"
      expand-on-hover
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

      <v-divider />
      <v-btn
        outline
        @click="logout"
      >
        Logout
      </v-btn>
      <v-list-tile
        v-for="item in items"
        :key="item.idx"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  data() {
    return {
      drawer: true,
      items: [
        { idx: 0, title: 'Home', icon: 'dashboard', link: '/dashboard' },
        { idx: 1, title: 'New Resume', icon: 'note_add', link: '/dashboard/resume/create' }
      ],
      mini: true,
      right: null,
      pictures: ''
    }
  },
  computed: mapGetters({
    picture: 'login/get'
  }),
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('login/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app > div{
    background-color: #093162;
 }

.v-alert .v-alert__icon.v-icon, .v-alert__dismissible .v-icon{
    color:#fff;
}

h1, h1 + h2{color: white;}
</style>
