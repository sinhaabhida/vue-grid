import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import bootstrap from 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './assets/css/style.css';
import './assets/css/responsive.css';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
