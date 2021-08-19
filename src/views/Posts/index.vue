<template>

  <page-template>
    <div class="wrapper-button">
      <button-element :label="buttonAddStart"></button-element>
      <button-element :label="buttonAddEnd"></button-element>
    </div>
    <card-header></card-header>
    <card-list :posts="filterTopPosts"></card-list>
  </page-template>

</template>

<script>
  import Template from "../../components/Template/index.vue"
  import Button from "../../components/shared/Button"
  import CardHeader from "../../components/shared/CardHeader"
  import CardList from "../../components/shared/CardList"
  import ApiService from "../../services/api"

  export default {
    components: {
      "page-template": Template,
      "card-header": CardHeader,
      "card-list": CardList,
      "button-element": Button
    },

    data() {
      return {
        posts: [],
        buttonAddStart: "Adicionar item no início",
        buttonAddEnd: "Adicionar item no final"
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
  .wrapper-button {
    display: flex;
    width: 96%;
    margin-top: 15px;
    justify-content: start;

    @media (max-width: $breakpoint-small) {
      flex-direction: column;
      width: 88%;
    }
  }
</style>