<template>

  <article class="card">
    <div class="card__header card__box">
      <span>ID</span>
      <p>Título</p>
    </div>
    
    <div class="card__content card__box" v-for="post of filterTopPosts" :key="post.id">
      <span>{{ post.id }}</span>
      <p> {{ post.title }}</p>
      <a class="card__content__link" href="#">Ver</a>
    </div>
  </article>

</template>

<script>
  export default {
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
  @import "../../../sass/_variables.scss";

  .card {
    display: flex;
    flex-direction: column;
    width: 96%;
    gap: 3px;
    margin-top: 30px;

    @media (max-width: $breakpoint-small) {
      width: 90%;
      height: 70px;
    }

    &__box {
      padding: 10px;
      background: white;
      border: 1px solid lightgray;
      height: 60px;
      align-items: center;
    }

    &__header {
      display: grid;
      grid-template-columns: 50px auto;
      }

    &__content {
      display: grid;
      grid-template-columns: 50px auto 50px;

      &__link {
        @media (max-width: $breakpoint-small) {
          display: none;
        }
      }
    }
  } 
</style>