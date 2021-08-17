<template>

    <page-template :titulo="titulo">
      <form-posts :title="post.title" :description="post.body"></form-posts>
    </page-template>
    
</template>

<script>
  import Template from "../../../components/Template/index.vue"
  import Form from "../../../components/shared/Form"

  export default {
    components: {
      "page-template": Template,
      "form-posts": Form, 
    },

    data() {
      return {
        post: {},
        id: this.$route.params.id,
        titulo: "Edição de Post"
      }
    },

    created() {
      this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(res => res.json())
        .then(post => this.post = post, err => console.log(err))
    },
  }
</script>

<style lang="scss">

</style>