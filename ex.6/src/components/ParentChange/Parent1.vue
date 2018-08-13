<template>
  <ul>
    <children1 v-for="item in list" v-bind:key="item.id" v-bind="item" v-on:attack="handleAttack"
               v-on:heal="healHeal"></children1>
  </ul>
</template>

<script>
  import Children1 from "./Children1"

  export default {
    name: "Parent1",
    components: {Children1},
    data: function () {
      return {
        list: [
          {id: 1, name: "スライム", hp: 100},
          {id: 2, name: "ゴブリン", hp: 140},
          {id: 3, name: "ゴーレム", hp: 300},
        ]
      }
    },
    methods: {
      handleAttack: function (id) {
        let item = this.list.find(function (el) {
          return el.id === id
        })
        if (item !== undefined && item.hp > 0) {
          item.hp -= 10
        }
      },
      healHeal: function (id) {
        let item = this.list.find(function (el) {
          return el.id === id
        })
        if (item !== undefined && item.hp < 1000) {
          item.hp += 10
        }
      }
    }
  }
</script>

<style scoped>

</style>