import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(VueTouch, { name: 'v-touch' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
