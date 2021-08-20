<template>
  <div class="wrapper">
    <div class="card-header">
      <span>ID</span>
      <p>Título</p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">

  .wrapper {
    display: flex;
    justify-content: start;
    width: 94%;

    @media (max-width: $breakpoint-small) {
      width: 85%;
    }
  }
  .card-header {
    @include cardBox();
    margin-top: 20px;

    @media (max-width: $breakpoint-small) {
      width: 100%;
    }
  }
  
</style>