const MyComponent = {
  template: `<p>スコープ制限{{msg}}</P>`,
  data: function () {
    return {
      msg: "コンポーネント"
    }
  }
}

Vue.component('my-component2', {
  template: `<p>グローバルスコープ{{msg}}</P>`,
  data: function () {
    return {
      msg: "コンポーネント"
    }
  }
})

Vue.component('my-component3', {
  template: `<p><comp-child></comp-child></P>`,
})

Vue.component('comp-child', {
  // テンプレートで受け取ったvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性名を指定
  props: ['val']
})

new Vue({
  el: "#app1",
  components: {
    'my-component1': MyComponent
  }
})

new Vue({
  el: "#app2"
})

new Vue({
  el: "#app3"
})