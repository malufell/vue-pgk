<template>

  <div class="card-item">
    <span>{{ id }}</span>

    <router-link class="card-item__title" :to="{ name: 'edit', params: { id: id } }">
      <p> {{ title }}</p>
    </router-link>

    <router-link :to="{ name: 'edit', params: { id: id } }">
      <span class="card-item__link">Editar</span>
    </router-link>

  </div>

</template>

<script>

export default {
  props: ['id', 'title'],
}

</script>

<style lang="scss">

  .card-item {
    @include cardBox();

    @media (max-width: $breakpoint-small) {
      width: 90%;
      min-height: 60px;
      height: auto;
      padding: 10px;
    }

    &__title {
      text-decoration: none;
      color: $font-black-color;
    }

    &__link {
      @media (max-width: $breakpoint-small) {
        display: none;
      }
    }
  } 
</style>