<template>

    <form class="form">
      <input class="form__title" placeholder="Title"/>
      <textarea class="form__description" placeholder="Description"></textarea>
      <button class="form__button">Salvar</button>
    </form>

</template>

<script>
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
    }
  
    &__title, &__description {
      width: 40%;
      height: auto;
      padding: 5px;
      font-family: $font-family;
      font-size: 1.1rem;
      border: 2px solid $border-color;
      border-radius: 4px;

      @media (max-width: $breakpoint-small) {
        width: 100%
      }
    }

    &__button {
      padding: 10px;
      width: 100px;
      background-color: #7C4DFF;
      border-radius: 4px;
      border: none;
      color: white;
      font-size: 1.1rem;
      cursor: pointer;

      @media (max-width: $breakpoint-small) {
        width: 100%
      }
    }
  }

</style>