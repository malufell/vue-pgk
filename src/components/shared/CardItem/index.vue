<template>
  <div class="card-item" >
    <span>{{ id }}</span>
    <p class="card-item__title" @click="goToEdit()"> {{ title }}</p>
    <a href="" class="card-item__link">Remover</a>
    <a href="" class="card-item__link" @click="goToEdit()">Editar</a>
  </div>

</template>

<script>

export default {
  props: ['id', 'title'],

  methods: { 

    goToEdit() {

    this.$router.push(`/postsEdit/${this.id}`); 

  }},

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
      cursor: pointer;
    }

    &__link {
      @media (max-width: $breakpoint-small) {
        display: none;
      }
    }
  } 
</style>