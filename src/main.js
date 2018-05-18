import Vue from 'vue'
import App from './App.vue'

const SocialSharing =require('vue-social-sharing');

Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
