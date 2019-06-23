<template>
  <v-app>
    <Index/>
       <v-content>
      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Index from './views/Index'

export default {
  name: 'App',
  components: {
    Index
  },
  data () {
    return {
      
    }
  }
}
</script>
