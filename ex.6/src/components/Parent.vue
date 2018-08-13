<template>
  <div>
    <ul>
      <li>
        <children val="メッセージ1"></children>
      </li>
      <li>
        <children val="メッセージ2"></children>
      </li>
      <li>
        <children val="メッセージ3"></children>
      </li>
      <li>
        <children val="メッセージ3"></children>
      </li>
    </ul>

  </div>
</template>

<script>
  import Children from "./Children";

  export default {
    name: "Parent",
    components: {Children}
  }
</script>

<style scoped>
  * {
    background-color: azure;
    border: 1px black solid;
  }
</style>