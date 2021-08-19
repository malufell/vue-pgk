<template>

  <page-template>
    <div class="wrapper-button">
      <button-element :label="buttonAddStart" @addStart="addItemStart()"></button-element>
      <button-element :label="buttonAddEnd" @addEnd="addItemEnd()"></button-element>
    </div>
    <card-header></card-header>
    <card-list :posts="changeId"></card-list>
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
        .then(posts => this.posts = posts.data.filter(post => post.id <= 3 && post.id > 1), err => console.log(err))
    },

    computed: {      
      changeId() {
        let id = 1;
        this.posts.forEach(post => { post.newId = id, id++ });
        return this.posts;
      },
    },

    methods: {
      addItemStart() {
        const newPost = 1;
        this.service = new ApiService()
        .busca(newPost)
        .then(newPost => this.posts.unshift(newPost.data), err => console.log(err))
      },

      addItemEnd() {
        const newPost = 1;
        this.service = new ApiService()
        .busca(newPost)
        .then(newPost => this.posts.push(newPost.data), err => console.log(err))
      }
    }
  }
</script>

<style lang="scss">

  .wrapper-button {
    display: flex;
    width: 94%;
    margin-top: 15px;
    justify-content: start;

    @media (max-width: $breakpoint-small) {
      flex-direction: column;
      width: 88%;
    }
  }
  
</style>