<template>
  <button class="button" @click="newItem" >{{ label }}</button>
</template>

<script>

export default {
  props: ['label'],

  methods: {
    newItem() {
      if(this.label == "Adicionar item no início") {
        return this.$emit("addStart");
      } else {
        return this.$emit("addEnd");
      };
    }
  }
}
</script>

<style lang="scss">
  .button {
    padding: 10px;
    width: 220px;
    margin: 8px 8px 0 0;
    background-color: $bg-purple-color;
    border-radius: 4px;
    border: none;
    color: $font-white-color;
    font-size: 1.1rem;
    cursor: pointer;

    @media (max-width: $breakpoint-small) {
      width: 100%;
      margin-right: 0;
      align-self: center;
    }
  }
</style>