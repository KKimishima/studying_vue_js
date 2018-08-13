<template>
  <div>
    <p>Childrenが受け取り={{val}}</p>
  </div>
</template>

<script>
  export default {
    name: "Children",
    props: {
      val: String
    }
  }
</script>

<style scoped>
  * {
    background-color: darkgray;
    border: 1px black solid;
  }
</style>