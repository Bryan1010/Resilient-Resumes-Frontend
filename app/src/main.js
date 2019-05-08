import Vue from 'vue'
import './plugins/vuetify'
import Index from './Index.vue'
import'../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/main.styl'
import 'vuetify/src/stylus/app.styl'



Vue.config.productionTip = false


new Vue({
  render: h => h(Index),
}).$mount('#app')

