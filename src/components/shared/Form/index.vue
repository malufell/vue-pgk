<template>

    <form class="form">
      <input class="form__title" placeholder="Title" v-model="title">
      <textarea class="form__description" placeholder="Description" v-model="description"></textarea>
      <button-element :label="buttonSave"></button-element>
    </form>

</template>

<script>
import Button from "../Button"

export default {
  components: {
   "button-element": Button
  },

  props: ['title', 'description'],

  data() {
    return {
      buttonSave: "Salvar"
    }
  }
}

</script>

<style lang="scss">

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 10px;
    gap: 10px;
    width: 96%;
    height: 300px;
    background-color: $bg-white-color;
    border: 2px solid $border-color;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      gap: 20px;
    }
  
    &__title, &__description {
      width: 40%;
      padding: 5px;
      font-family: $font-family;
      font-size: 1.1rem;
      border: 2px solid $border-color;
      border-radius: 4px;

      @media (max-width: $breakpoint-small) {
        width: 100%
      }
    }

    &__description {
      height: 120px;
    }
  }

</style>