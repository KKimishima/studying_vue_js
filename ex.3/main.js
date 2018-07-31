document.addEventListener("DOMContentLoaded", () => {
  let app1 = new Vue({
    el: "#app1",
    data: {
      msg: ""
    },
    methods: {
      ch(event) {
        this.msg = event.target.value + "!!!"
      },
      handler: function (comment) {
        console.log(comment)
      }
    }
  })
  let app2 = new Vue({
    el: "#app2",
    data: {
      val: null
    }
  })
  let app3 = new Vue({
    el: "#app3",
    data: {
      val: []
    }
  })
  let app4 = new Vue({
    el: "#app4",
    data: {
      val: ''
    }
  })
  let app5 = new Vue({
    el: "#app5",
    data: {
      val: ''
    }
  })
})