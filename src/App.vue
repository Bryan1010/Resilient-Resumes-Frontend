<template>
  <v-app>
    
  
       <v-content>
      
      <router-view>
        <Index/>
        <Welcome/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Index from './views/Index'
import Welcome from './views/Welcome'
export default {
  name: 'App',
  components: {
    Index,
    Welcome
  },
  data () {
    return {
 
    }
  }
}
</script>
