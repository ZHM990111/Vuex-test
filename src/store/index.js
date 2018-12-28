import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

//引入模块
import app from './modules/app'
  
export default new Vuex.Store({
   //modules相对于combinreducer一样，用来合并store
   modules:{
     app
   }
})