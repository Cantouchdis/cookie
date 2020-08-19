import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = process.env.VUE_APP_API_HOST
new Vue({
  render: h => h(App)
}).$mount('#app')
