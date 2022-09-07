<template>
  <div>
    <b-card
      title="Post title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-top
      tag="article"
      class="mb-2"
      footer-tag="footer"
    >
      <b-card-text class="mt-2 mb-2"> Post description </b-card-text>
      <br />

      <PollPostListItemStructure v-if="post.type == 'poll'" />
      <EventPostListItemStructure v-if="post.type == 'event'" />
      <br />
      <PostCommentsList />
      <template #footer>
        <b-row> </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import PollPostListItemStructure from "./poll-post/PollPostListItemStructure.vue";
import EventPostListItemStructure from "./event-post/EventPostListItemStructure.vue";
import PostCommentsList from "./post-comments/PostCommentsList.vue";

export default {
  name: "PostsListItem",
  components: {
    PollPostListItemStructure,
    EventPostListItemStructure,
    PostCommentsList,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>