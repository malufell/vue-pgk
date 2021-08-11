<template>
  <div id="app">

    <home></home>

  </div>
 
</template>

<script>
  import Home from "./components/Home"

  export default {
    components: {
      "home": Home,
    }
  }
</script>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
