// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import menu from './components/menu'
import swTree from './components/swTree/VueTree'
Vue.config.productionTip = false

Vue.component('sw-menu',menu)
Vue.component('sw-tree',swTree)
// import Vuetree from 'vue-simple-tree'

// Vue.use(Vuetree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
