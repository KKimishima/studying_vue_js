document.addEventListener("DOMContentLoaded", () => {
  let app = new Vue({
    el: "#app",
    data: {
      msg: "シンプルなテンプレートバインディング"
    }
  })
  let app2 = new Vue({
    el: "#app2",
    data: {
      list: ['りんご', "バナナ", "みかん"]
    }
  })
  let app3 = new Vue({
    el: "#app3",
    methods: {
      handleClick: (event) => {
        alert(event.target)
      }
    }
  })
  let app4 = new Vue({
    el: "#app4",
    data: {
      msg2: "バインディング機能"
    }
  })
  let app5 = new Vue({
    el: "#app5",
    data: {
      show: true
    }
  })
  let app6 = new Vue({
    el: "#app6",
    data: {
      show: true
    }
  })
  let app7 = new Vue({
    el: "#app7",
    data: {
      msg: "基本のVuejsの流れ"
    },
    computed: {
      computedMessage: () => {
        return this.msg + ":算出プロパティ"
      }
    },
    create: () => {
      console.log("ライフサイクルフック")
    },
    methods: {
      myMethod: () => {
        console.log("アプリケーションで利用されるメソッド")
      }
    }
  })
})