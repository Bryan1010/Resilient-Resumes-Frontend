
<template>
  <v-app>
    
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>About Us</v-btn>
      <v-btn flat>Career Resources</v-btn>
      <v-btn flat>Create Profile</v-btn>
    </v-toolbar-items>
  </v-toolbar>
<v-app id="inspire">
    <v-parallax
      dark
      src=""
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-layout>
    <v-content>
      <v-container fluid fill-height>
      
         <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                           
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="primary">Login</v-btn>
               
                <v-btn dark color="primary">Create Profile</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>