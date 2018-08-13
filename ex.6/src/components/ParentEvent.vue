<template>
  <div>
    <h1>親にイベント渡し</h1>
    <children-event v-on:childs-event="parentsMethod">
    </children-event>
  </div>
</template>

<script>
  import ChildrenEvent from "./ChildrenEvent";

  export default {
    name: "ParentEvent",
    components: {ChildrenEvent},
    methods: {
      parentsMethod: function () {
        alert("イベントキャッチ")
      }
    }
  }
</script>

<style scoped>
  * {
    background-color: darkcyan;
    border: 1px black solid;
  }
</style>