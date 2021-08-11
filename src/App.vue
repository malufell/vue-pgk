<template>
  <div id="app">

     <menu-template></menu-template>

      <main class="content">

        <header-template></header-template>
        <card></card>

      </main>

  </div>
</template>

<script>
  import Menu from "./components/template/Menu"
  import Header from "./components/template/Header"
  import Card from "./components/shared/Card"

  export default {
    components: {
      "menu-template": Menu,
      "header-template": Header,
      "card": Card,
    }
  }
</script>

<style lang="scss">
  @import "/sass/_variables.scss";

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: grid;
    grid-template-areas: 
      "menu content";
    grid-template-columns: $menu-width-desktop auto;
    grid-template-rows: 100vh;
    grid-gap: $gap;

    @media (max-width: $breakpoint-small) {
      grid-gap: 0;
      grid-template-columns: 100%;
      grid-template-rows: $menu-height-mobile 100vh;
      grid-template-areas: 
        "menu" 
        "content";
    }
  }

  .content {
    grid-area: "content";
    @include alignFlex(justify-content);
    background-color: $bg-color;
  }

</style>
