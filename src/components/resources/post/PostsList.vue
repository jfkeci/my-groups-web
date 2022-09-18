<template>
  <div class="mt-3" v-if="isLoggedIn">
    <div v-for="post in posts" :key="post.id">
      <PostsListItem :post="post" />
    </div>
    <b-card class="mt-3" header="Form Data Result" v-if="!$dbg">
      <pre class="m-0">{{ posts }}</pre>
    </b-card>
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";

export default {
  name: "PostsList",
  components: {
    PostsListItem,
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  watch: {
    posts() {
      console.log("hwem.XWX", this.posts);
    },
  },
};
</script>

<style>
</style>