<template>
  <v-navigation-drawer
    v-model="drawer"
    class="pb-0"
    floating
    hide-overlay
    stateless
    width="380"
  >
    <v-layout fill-height>
      <v-navigation-drawer
        dark
        mini-variant
        stateless
        value="true"
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="`${this.$store.state.login.authenticated.gravatar}`">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                  icon
                  @click.native.stop="mini = !mini"
                >
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider />

          <v-list-tile
            v-for="item in items"
            :key="item.title"
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

      <v-list class="grow">
        <v-list-tile
          v-for="link in links"
          :key="link"
        >
          <v-list-tile-title v-text="link" />
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      links: ['Home', 'Contacts', 'Settings'],
      mini: false,
      right: null
    }
  }
}
</script>
