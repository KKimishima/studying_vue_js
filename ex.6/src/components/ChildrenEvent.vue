<template>
  <div>
    <h1>イベント</h1>
    <button v-on:click="handleClick">イベント発火</button>
  </div>
</template>

<script>
  export default {
    name: "ChildrenEvent",
    methods: {
      // ボタンのクリックイベントのハンドラでchilds-eventを発火する
      handleClick: function () {
        this.$emit('childs-event')
      }
    }
  }
</script>

<style scoped>
  * {
    background-color: lightcoral;
    border: 1px black solid;
  }
</style>