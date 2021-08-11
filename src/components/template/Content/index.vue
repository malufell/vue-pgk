<template>

  <main class="content">
    <slot></slot>
  </main>

</template>

<script>
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .content {
    grid-area: "content";
    @include alignFlex(justify-content);
    background-color: $bg-color;
  }
</style>