import 'babel-polyfill'
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msg: "初期メッセージ"
  },
  getters: {
    // ステータスを返す
    msg(state){
      return state.msg
    }
  },
  mutations: {
    setMsg(state,payload){
      state.msg = payload.msg
    }
  },
  actions:{
    doUpdate({commit},msg){
      commit('setMsg',{msg})
    }
  }
})

export default store