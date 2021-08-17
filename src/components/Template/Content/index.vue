<template>

  <main class="content">
    <slot></slot>
  </main>

</template>

<script>
</script>

<style lang="scss">

  .content {
    grid-area: "content";
    @include alignFlex(justify-content);
    background-color: $bg-color;
  }

</style>