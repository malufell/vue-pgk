<template>

    <page-template :title="title">
      <form-posts :title="post.title" :description="post.body"></form-posts>
    </page-template>
    
</template>

<script>
  import Template from "../../../components/Template/index.vue"
  import Form from "../../../components/shared/Form"
  import ApiService from "../../../services/api"

  export default {
    components: {
      "page-template": Template,
      "form-posts": Form, 
    },

    data() {
      return {
        post: {},
        id: this.$route.params.id,
      }
    },

    created() {

      ApiService()
        .get(`/posts/${this.id}`)
        .then(post => this.post = post.data, err => console.log(err))
    }
  }

</script>

<style lang="scss">

</style>