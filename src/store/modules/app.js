//模块中的数据  ，子仓库
const state = {
    num:999
}

const getters = {
    // 格式化时间 YYYY-MM-DD HH:MM:SS
    date(state){
      let date = new Date();
      let year = date.getFullYear(),
          month = (date.getMonth()+1).toString().padStart(2, '0'),
          day = date.getDate().toString().padStart(2, '0'),
          hour = date.getHours().toString().padStart(2, '0'),
          min = date.getMinutes().toString().padStart(2, '0'),
          sec = date.getSeconds().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    }
}

//模块同步的改变
const mutations ={
    //两参数 上面的state 和action
    changenum(state,{payload}){
        state.num = payload === "+"?state.num+1:state.num-1
    }
}

//模块的异步改变
const actions={
     changenumAsync({commit},action){
        return new Promise((resolve,reject)=>{
                 commit('changenum',action)
                 resolve()
        })
     }  
}

//抛出数据
export default {
    //命名空间
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}

