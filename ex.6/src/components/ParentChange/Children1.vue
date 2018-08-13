<template>
  <div>
    <li>
      {{name}} :HP:{{hp}}
      <button v-on:click="doAttack">攻撃</button>
      <button v-on:click="doHeal">回復</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: "Children1",
    props: {
      id: Number,
      name: String,
      hp: Number
    },
    methods: {
      doAttack: function () {
        this.$emit("attack", this.id)
      },
      doHeal: function () {
        this.$emit("heal", this.id)
      }
    }
  }
</script>

<style scoped>

</style>