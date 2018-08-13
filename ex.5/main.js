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
  template: `<h1><comp-child></comp-child></h1>`,
})

Vue.component('comp-child', {
  // テンプレートで受け取ったvalを使用
  template: '<p>{{ val }}</p>',
  // 受け取る属性名を指定
  props: ['val']
})

Vue.component('my-component4', {
  template: `<h1><comp-child2></comp-child2></h1>`,
})
Vue.component('comp-child2', {
  template: `<p id="hoge" class="hoge">クラスがマージされる</p>`
})

Vue.component('my-component5', {
  template: `
    <ul>
      <comp-child4 v-for="item in list"
        v-bind:key="item.id"
        v-bind:name="item.name"
        v-bind:hp="item.hp">
      </comp-child4>
    </ul>
  `
})

Vue.component('comp-child4', {
  template: '<li>{{ name }} HP.{{ hp }}</li>',
  props: ['name', 'hp']
})

Vue.component('comp-child6', {
  template: ``
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

new Vue({
  el: "#app4"
})

new Vue({
  el: "#app5",
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
  }
})

const myC1 = {
  template: `<h1><myc1-ch></myc1-ch></h1>`
}

Vue.component('myc1-ch', {
  template: `<p>子コンポーネント</p>`
})
// const myC1Ch = {
//   template: `<p>子コンポーネント</p>`
// }

new Vue({
  el: "#app6",
  components: {
    "myc1": myC1,
    "myc1-ch": myC1Ch
  }
})

