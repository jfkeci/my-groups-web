<template>
  <div class="mt-3">
    <PostsListItem v-if="false" />
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";

export default {
  name: "PostsList",
  components: {
    PostsListItem,
  },
};
</script>

<style>
</style>