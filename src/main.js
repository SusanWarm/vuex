// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  $ from 'jquery'
import filters from './filters/index'
import store from '../vuex/index'
import './assets/css/reset.css'
Vue.prototype.$=$;
Vue.config.productionTip = false

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
