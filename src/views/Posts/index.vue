<template>

  <page-template>
    <card-header></card-header>
    <card-item v-for="post of filterTopPosts" :key="post.id" :id="post.id" :title="post.title"></card-item>
  </page-template>

</template>

<script>
  import Template from "../../components/template/ index.vue"
  import CardHeader from "../../components/shared/CardHeader"
  import CardItem from "../../components/shared/CardItem"

  export default {
    components: {
      "page-template": Template,
      "card-header": CardHeader,
      "card-item": CardItem,
    },

    data() {
      return {
        posts: [],
        topPosts: []
      }
    },
                          
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => this.posts = post, err => console.log(err));
    },

    computed: {
      filterTopPosts() {
        return this.topPosts = this.posts.filter(post => post.id <= 5)
      }
    }
  }
</script>

<style lang="scss">

</style>