<template>

  <div class="card-item">
    <span>{{ id }}</span>
    <p> {{ title }}</p>
    <a class="card-item__link" href="#">Ver</a>
  </div>

</template>

<script>

export default {
  props: ['id', 'title'],
}

</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .card-item {
    @include cardBox();

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
    }

    &__link {
      @media (max-width: $breakpoint-small) {
        display: none;
      }
    }
  } 
</style>