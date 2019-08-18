// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import FastClick from 'fastclick'
import 'lib-flexible/flexible'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(Lazyload);
Vue.use(Vant);
/**
 *  点击延迟
 */
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
