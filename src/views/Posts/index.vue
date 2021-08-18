<template>

  <page-template>
    <card-header></card-header>
    <card-list :posts="filterTopPosts"></card-list>
  </page-template>

</template>

<script>
  import Template from "../../components/Template/index.vue"
  import CardHeader from "../../components/shared/CardHeader"
  import CardList from "../../components/shared/CardList"
  import ApiService from "../../services/api"

  export default {
    components: {
      "page-template": Template,
      "card-header": CardHeader,
      "card-list": CardList,
    },

    data() {
      return {
        posts: [],
      }
    },
                          
    created() {
      this.service = new ApiService()
        .lista()
        .then(posts => this.posts = posts.data, err => console.log(err))
    },

    computed: {      
      filterTopPosts() {
        return this.posts.filter(post => post.id <= 2)
      }}
  }
</script>

<style lang="scss">

</style>