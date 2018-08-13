<template>
  <child1>
    <header slot="hoge1">
      hoge1
    </header>
    親のコンポーネント
  </child1>
</template>

<script>
  import Child1 from "./Child1";
  export default {
    name: "Parent1",
    components: {Child1}
  }
</script>

<style scoped>

</style>