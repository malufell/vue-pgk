<template>
  <div class="template">
    <menu-template></menu-template>
  
    <content-template>
      <header-template></header-template>
      <slot></slot>
    </content-template>
  </div>
</template>

<script>
  import Menu from "../../components/template/Menu"
  import Header from "../../components/template/Header"
  import Content from "../../components/template/Content"

  export default {
    components: {
      "menu-template": Menu,
      "header-template": Header,
      "content-template": Content,
    },
  }
</script>

<style lang="scss">

  .template {
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