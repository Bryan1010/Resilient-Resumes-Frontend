import Vue from 'vue'
import './plugins/vuetify'
import Template from './Template.vue'
import'../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/main.styl'




Vue.config.productionTip = false

new Vue({
  render: h => h(Template),
}).$mount('#app')
