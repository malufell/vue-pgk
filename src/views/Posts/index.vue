<template>

  <page-template>
    <div class="wrapper-button">
      <button-element :label="buttonAddStart" @handleClick="addItemStart()"></button-element>
      <button-element :label="buttonAddEnd" @handleClick="addItemEnd()"></button-element>
    </div>
    <card-header></card-header>
    <card-list :posts="changeId" @btnRemoveActive="removePost($event)"></card-list>
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
        newPost: 1,
        posts: [],
        buttonAddStart: "Adicionar item no início",
        buttonAddEnd: "Adicionar item no final"
      }
    },
                          
    created() {
      ApiService()
        .get('/posts')
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

        ApiService()
          .get(`/posts/${this.newPost}`)
          .then(newPost => this.posts.unshift(newPost.data), err => console.log(err))
      },

      addItemEnd() {

        ApiService()
          .get(`/posts/${this.newPost}`)
          .then(newPost => this.posts.push(newPost.data), err => console.log(err))
      },

      removePost(event) {
        let index = event - 1; //posição
        this.posts.splice(index, 1);
      },
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