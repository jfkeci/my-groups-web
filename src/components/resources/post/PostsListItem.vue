<template>
  <div>
    <b-card
      :title="post.title"
      :img-src="
        post.type == 'info' ? 'https://picsum.photos/600/300/?image=25' : ''
      "
      img-top
      tag="article"
      class="mb-2"
      footer-tag="footer"
    >
      <b-card-text class="mt-2 mb-2" v-if="post.body">
        {{ post.body }}
      </b-card-text>
      <br />

      <PollPostListItemStructure :post="post" v-if="post.type == 'poll'" />
      <EventPostListItemStructure :post="post" v-if="post.type == 'event'" />

      <br />

      <PostCommentsList />
      <template #footer>
        <div class="d-flex align-items-center">
          <small class="ml-1">
            <b>{{ post.type.toUpperCase() }}</b>
          </small>
        </div>
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