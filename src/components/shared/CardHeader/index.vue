<template>
  <div class="card-header">
    <span>ID</span>
    <p>Título</p>
  </div>
</template>

<script>
</script>

<style lang="scss">

  .card-header {
    @include cardBox();
    margin-top: 20px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
    }
  }
  
</style>