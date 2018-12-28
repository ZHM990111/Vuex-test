import Vue from 'vue'
import App from './App.vue'

//引入store  ，就是吧store挂到全局(类似provider)
import store from './store/index'
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
