<template>

  <page-template :title="title">
    <card-header></card-header>
    <card-list :posts="filterTopPosts"></card-list>
  </page-template>

</template>

<script>
  import Template from "../../components/Template/index.vue"
  import CardHeader from "../../components/shared/CardHeader"
  import CardList from "../../components/shared/CardList"

  export default {
    components: {
      "page-template": Template,
      "card-header": CardHeader,
      "card-list": CardList,
    },

    data() {
      return {
        posts: [],
        title: "Lista de Posts",
      }
    },
                          
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => this.posts = post, err => console.log(err));
    },

    computed: {
      filterTopPosts() {
        return this.posts.filter(post => post.id <= 5)
      }
    }
  }
</script>

<style lang="scss">

</style>