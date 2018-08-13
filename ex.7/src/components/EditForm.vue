<template>
  <div class="edit-From">
    <input ref="input" v-bind:value="msg" v-on:input="doUpdate"/>
  </div>
</template>

<script>
  export default {
    name: "EditForm",
    computed:{
      msg(){
        return this.$store.getters.msg
      }
    },
    methods:{
      doUpdate(){
        this.$store.dispatch("doUpdate",this.$refs.input.value)
      }
    }
  }
</script>

<style scoped>

</style>