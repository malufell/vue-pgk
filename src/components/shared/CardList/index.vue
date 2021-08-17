<template>
  <div class="card-list">
    <card-item v-for="post in posts" :key="post.id" :id="post.id" :title="post.title"></card-item>
  </div>
</template>

<script>
import CardItem from "../CardItem"

export default {
  components: {
      "card-item": CardItem
  },

  props: {
    posts: { 
      required: true,
      type: Array,
      default: 'posts',
    }
  }
}
</script>

<style lang="scss">

  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

</style>