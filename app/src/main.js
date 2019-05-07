import Vue from 'vue'
import './plugins/vuetify'
import Template from './Template.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Template),
}).$mount('#app')
