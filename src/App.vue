<template>
  <v-app>
    
  
       <v-content>
      
      <router-view>
        <Index/>
        <Welcome/>
        <Resume/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Index from './views/Index'
import Welcome from './views/Welcome'
import Resume from './views/Resume'
export default {
  name: 'App',
  components: {
    Index,
    Welcome,
    Resume
  },
  data () {
    return {
 
    }
  }
}
</script>
