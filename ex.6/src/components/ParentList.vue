<template>
  <div>
    <h1>コンポーネントリスト</h1>
    <button v-on:click="onList">リストを表示</button>
    <button v-on:click="offList">リスト非表示</button>
    <children v-for="item in list" v-bind:key="item.id" v-bind:val="item.val"></children>
  </div>
</template>

<script>
  import Children from "./Children"

  export default {
    name: "ParentList",
    components: {Children},
    methods: {
      onList: function () {
        this.list = [
          {id: 1, val: "リスト1"},
          {id: 2, val: "リスト2"},
          {id: 3, val: "リスト3"},
        ]
      },
      offList: function () {
        this.list = []
      }
    },
    data: function () {
      return {
        list: []
      }
    }
  }
</script>

<style scoped>
  * {
    background-color: gray;
    border: 1px black solid;
  }
</style>