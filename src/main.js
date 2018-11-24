import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import axios from 'axios'
// import vueTap from 'v-tap'

// Vue.use(vueTap)
// v-tap="{methods:showReceiveModel}" // 在元素上绑定事件

// import FastClick from 'fastclick'; // 引入插件
// FastClick.attach(document.body, options); // 使用 fastclick

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')