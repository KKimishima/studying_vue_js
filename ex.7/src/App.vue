<template>
  <div>
    <h1>仮想コンポーネント</h1>
    <p>{{msg}}</p>
    <edit-form/>
  </div>
</template>

<script>

  import EditForm from "./components/EditForm";
  export default {
    name: "App",
    components: {EditForm},
    computed:{
      msg(){
        return this.$store.getters.msg
      }
    }
  }
</script>

<style scoped>

</style>