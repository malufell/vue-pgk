<template>
  <div class="card-list">
    <card-item v-for="post in posts" :key="post.newId" :id="post.id" :newId="post.newId" :title="post.title" v-on="$listeners" ></card-item>
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
      default: [],
    },
  },
}
</script>

<style lang="scss">

  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 94%;
    overflow-y: auto;
    margin-bottom: 15px;
}

</style>