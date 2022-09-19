<template>
  <div class="mb-3">
    <b-card
      :title="post.title"
      :img-src="
        post.type == 'info' ? post.image ?? 'https://picsum.photos/500/200' : ''
      "
      img-top
      tag="article"
      footer-tag="footer"
    >
      <b-card-text class="mt-2 mb-2" v-if="post.body">
        {{ post.body }}
      </b-card-text>
      <br />

      <PollPostListItemStructure :post="post" v-if="post.type == 'poll'" />
      <EventPostListItemStructure :post="post" v-if="post.type == 'event'" />

      <br />

      <PostCommentsList :comments="post.comments" :postId="post.id" />

      <template #footer>
        <div class="d-flex align-items-center">
          <PostLikeModal :post="post" class="mr-5" />
          <small class="ml-1">
            <b>{{ $t(post.type.toUpperCase()) }}</b>
          </small>
        </div>
      </template>
      <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
        <pre class="m-0">{{ post }}</pre>
      </b-card>
    </b-card>
  </div>
</template>

<script>
import PollPostListItemStructure from "./poll-post/PollPostListItemStructure.vue";
import EventPostListItemStructure from "./event-post/EventPostListItemStructure.vue";
import PostCommentsList from "./post-comments/PostCommentsList.vue";
import PostLikeModal from "../../modals/PostLikeModal.vue";

export default {
  name: "PostsListItem",
  components: {
    PollPostListItemStructure,
    EventPostListItemStructure,
    PostCommentsList,
    PostLikeModal,
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