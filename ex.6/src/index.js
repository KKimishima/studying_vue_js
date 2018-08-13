import "./common.css"
import Vue from 'vue'
import App from './components/App'
import Children from "./components/Children"
import Parent from "./components/Parent"
import BootSVue from "./components/BootSVue"
import ParentList from './components/ParentList'
import ParentEvent from './components/ParentEvent'
import TableParent from './components/TableParent'
import ParentChange from "./components/ParentChange/Parent1"
import Parent1 from "./components/slot/Parent1"

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  el: "#app",
  components: {App},
  template: "<app/>"
})

new Vue({
  el: "#app1",
  components: {Children},
  template: "<children/>"
})

new Vue({
  el: "#app2",
  components: {Parent},
  template: "<parent/>"
})

new Vue({
  el: "#app3",
  components: {BootSVue},
  template: "<boot-s-vue/>"
})

new Vue({
  el: "#app4",
  components: {ParentList},
  template: "<parent-list/>"
})

new Vue({
  el: "#app5",
  components: {ParentEvent},
  template: "<parent-event/>"
})

new Vue({
  el: "#app6",
  components: {TableParent},
  template: "<table-parent/>"
})

new Vue({
  el: "#app7",
  components: {ParentChange},
  template: "<parent-change/>",
})

new Vue({
  el:"#app8",
  components:{Parent1},
  template:"<parent1/>"
})
