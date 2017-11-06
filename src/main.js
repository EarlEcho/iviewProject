// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router/index.js'
import 'iview/dist/styles/iview.css';

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: router
};
/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
