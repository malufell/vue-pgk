<template>
  <div class="card-item" >
    <span>{{ newId }}</span>
    <p class="card-item__title" @click="goToEdit()"> {{ title }}</p>
    <a class="card-item__link" @click="btnRemoveActive(newId)">Remover</a>
    <a href="" class="card-item__link" @click="goToEdit()">Editar</a>
  </div>

</template>

<script>

export default {
  props: ['id', 'title', 'newId'],

  methods: { 

    goToEdit() {
      this.$router.push(`/postsEdit/${this.id}`); 
    },

    btnRemoveActive(newId) {
      return this.$emit("btnRemoveActive", newId)
    }
  },

 
}

</script>

<style lang="scss">

  .card-item {
    @include cardBox();

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: auto;
      padding: 10px;
    }

    &__title {
      text-decoration: none;
      color: $font-black-color;
      cursor: pointer;
    }

    &__link {
      cursor: pointer;
      color: #0000EE;
      text-decoration: underline;
    }
  } 
</style>