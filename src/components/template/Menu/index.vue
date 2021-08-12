<template>
  <nav class="menu">
      <h1> área do menu </h1>
  </nav>  
</template>

<script>
</script>

<style lang="scss">

.menu {
  grid-area: "menu";
  @include alignFlex(center);
  background-color: $bg-color;

  @media (max-width: $breakpoint-small) {
    border-bottom: solid 1px white;
  }
}

</style>