let app1 = new Vue({
  el: "#app1",
  computed: {
    addWorld: function () {
      return this.msg + "_world!!!"
    }
  },
  data: {
    msg: "Hello"
  }
})

let app2 = new Vue({
  el: "#app2",
  data: {
    wid: "100",
    hight: "100"
  },
  computed: {
    halfWid() {
      return this.wid / 2
    },
    halfHight() {
      return this.hight / 2
    },
    halfPoint() {
      return {
        x: this.halfHight,
        y: this.halfWid,
        sum: this.halfHight + this.halfWid
      }
    },
    getWid() {
      return this.wid()
    },
    setWid(val) {
      this.wid = val
    }
  }
})
let app3 = new Vue({
  el: "#app3",
  data: {
    list: [],
    budget: 500,
    limit: 100
  },
  created: function () {
    axios.get('http://localhost:3000/todos').then(function (response) {
      // 取得完了したらlistリストに代入
      this.list = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  },
  computed: {
    mached: function () {
      return this.list.filter(function (el) {
        console.log(el.price)
        console.log(this.budget)
        console.log(el.price <= this.budget)
        return el.price <= this.budget
      }, this)
    },
    // matchedで返ったデータをlimit件返す算出プロパティ
    limited: function () {
      return this.mached.slice(0, this.limit)
    }
  }
})

let app4 = new Vue({
  el: "#app4",
  data: {
    list: [],
    current: '',
    topics: [
      { value: "vue", name: "Vue.js" },
      { value: "react", name: "React.js" }
    ]
  },
  watch: {
    current: function (val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: 'topic:' + val
        }
      }).then(function (response) {
        this.list = response.data.items
      }.bind(this))
    }
  }
})

let app5 = new Vue({
  el: "#app5",
  data: {
    price: 19800
  },
  filters: {
    localeNum: function (val) {
      return val.toLocaleString()
    }
  }
})