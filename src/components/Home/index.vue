<template>
  <div class="home">
    <menu-template></menu-template>
  
    <content-template>
      <header-template></header-template>
      <card></card>
    </content-template>
  </div>
</template>

<script>
  import Menu from "../template/Menu"
  import Header from "../template/Header"
  import Content from "../template/Content"
  import Card from "../shared/Card"

  export default {
    components: {
      "menu-template": Menu,
      "header-template": Header,
      "content-template": Content,
      "card": Card,
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";

  .home {
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
</style>