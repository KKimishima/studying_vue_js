import store from "./store"
import Vue from 'vue'
import App from './App'

new Vue({
  el:"#app",
  store,
  render: h => h(App)
})

