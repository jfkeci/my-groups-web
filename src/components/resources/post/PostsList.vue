<template>
  <div class="mt-3" v-if="isLoggedIn">
    <div>
      <PostsListItem v-if="false" />
      <EventListItem v-if="false" />
      <PollPostListItem v-if="false" />
    </div>
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";
import PollPostListItem from "../post/poll-post/PollPostListItem.vue";
import EventListItem from "../post/event-post/EventListItem";

export default {
  name: "PostsList",
  components: {
    PostsListItem,
    EventListItem,
    PollPostListItem,
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>

<style>
</style>