<template>
  <div class="posts">
    <menu-template></menu-template>
  
    <content-template>
      <header-template></header-template>
      <card-header></card-header>
      <card-item v-for="post of filterTopPosts" :key="post.id" :id="post.id" :title="post.title"></card-item>
    </content-template>
  </div>
</template>

<script>
  import Menu from "../../components/template/Menu"
  import Header from "../../components/template/Header"
  import Content from "../../components/template/Content"
  import CardHeader from "../../components/shared/CardHeader"
  import CardItem from "../../components/shared/CardItem"

  export default {
    components: {
      "menu-template": Menu,
      "header-template": Header,
      "content-template": Content,
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

  .posts {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: grid;
    grid-template-areas: 
      "menu content";
    grid-template-columns: $menu-width-desktop auto;
    grid-template-rows: 100vh;
    grid-gap: $gap;

    @media (max-width: $breakpoint-small) {
      grid-gap: 0;
      grid-template-columns: 100%;
      grid-template-rows: $menu-height-mobile 100vh;
      grid-template-areas: 
        "menu" 
        "content";
    }
  }
</style>