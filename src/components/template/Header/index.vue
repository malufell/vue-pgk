<template>

  <header class="header">
    Page Title
  </header>

</template>

<script>
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .header {
    display: flex;
    align-items: center;
    top: 0;
    background: $bg-white-color;
    border: 1px solid $border-color;
    height: 100px;
    width: 100%;
    font-size: 1.5rem;
    padding: 20px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
      margin-top: 20px;
    }
  }

</style>