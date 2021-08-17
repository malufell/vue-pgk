<template>

  <header class="header">
    {{ titulo }}
  </header>

</template>

<script>

export default {

  data() {
    return {
      titulo: "",
    }
  },

  created() {
    this.titulo = this.$router.history.current.meta.title
  }
}
</script>

<style lang="scss">

  .header {
    display: flex;
    align-items: center;
    top: 0;
    background: $bg-white-color;
    border: 1px solid $border-color;
    height: 100px;
    width: 100%;
    font-size: 1.5rem;
    padding: 20px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
      margin-top: 20px;
    }
  }

</style>