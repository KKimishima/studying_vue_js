<template>
  <div>
    <p>Hello!!{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        msg: "パラメータ",
      }
    }
  }
</script>

<style scoped>
  p {
    border: 1px solid #f00;
  }
</style>