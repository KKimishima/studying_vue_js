document.addEventListener("DOMContentLoaded", () => {
  let app1 = new Vue({
    el: "#app1",
    data: {
      msg: "バインディング",
      list: ["りんご", "バナナ", "いちご"],
      num: 1
    }
  })
  let app2 = new Vue({
    el: "#app2",
    data: {
      count: 0
    },
    methods: {
      countOn: function () {
        this.count += 1
      },
      countCrean: function () {
        this.count = 0
      }
    }
  })
  let app3 = new Vue({
    el: "#app3",
    data: {
      classObject: {
        isChild: true,
        isActive: true,
      },
      styleObject: {
        color: 'red',
        backgroundColor: "lightgray"
      }
    }
  })
  let app4 = new Vue({
    el: "#app4",
    data: {
      imgObject: {
        id: 1,
        src: 'https://1.bp.blogspot.com/-Bhks1PQQBjQ/WzC-dykT1NI/AAAAAAABNCQ/bOM0h9sJUJwyzGZ12uWuEtPoO5i2p8C1QCLcBGAs/s800/figure_money_satsutaba_binta.png',
        alt: "テスト",
        width: 200,
        height: 200
      }
    }
  })
  let app5 = new Vue({
    el: "#app5",
    data: {
      ok: true
    },
    methods: {
      showOff() {
        this.ok = false
      },
      showOn() {
        this.ok = true
      }
    }
  })
  let app6 = new Vue({
    el: "#app6",
    data: {
      list: [
        { id: 1, name: "山田太郎", sex: "男性" },
        { id: 2, name: "田中花子", sex: "女性" },
        { id: 3, name: "名無し", sex: "不明" }
      ]
    },
    methods: {
      addObject() {
        let max = this.list.reduce((a, b) => {
          return a.id > b.id ? a.id : b.id
        })

        this.list.push({
          id: max + 1,
          name: this.name,
          sex: "男性"
        })
      },
      removeObject(index) {
        this.list.splice(index, 1)
      }
    }
  })
})