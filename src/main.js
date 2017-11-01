// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import Routers from './router';
import 'iview/dist/styles/iview.css';

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
