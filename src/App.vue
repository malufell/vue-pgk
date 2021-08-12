<template>
  <div id="app">

    <posts></posts>

  </div>
 </template>

<script>
  import Posts from "./views/Posts"

  export default {
    components: {
      "posts": Posts,
    }
  }
</script>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
