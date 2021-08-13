<template>

    <page-template>
      <form-posts></form-posts>
    </page-template>
    
</template>

<script>
  import Template from "../../../components/template/ index.vue"
  import Form from "../../../components/shared/Form"

  export default {
    components: {
      "page-template": Template,
      "form-posts": Form, 
    },
  }
</script>

<style lang="scss">

</style>