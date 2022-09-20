<template>
  <b-card :title="$t('comments')">
    <b-list-group v-if="!showMore && comments.length">
      <div>
        <PostCommentsListItem :comment="comments[0]" />
      </div>
    </b-list-group>

    <b-list-group v-if="showMore && comments.length">
      <div v-for="comment in comments" :key="comment.id">
        <PostCommentsListItem :comment="comment" />
      </div>
    </b-list-group>

    <b-button
      size="sm"
      class="mt-2 mr-3"
      v-if="!showMore && comments.length > 1"
      @click="showMore = true"
      block
    >
      {{ $t("showMore") }}
    </b-button>

    <b-button
      size="sm"
      class="mt-2 mr-3"
      v-if="showMore"
      @click="showMore = false"
      block
    >
      {{ $t("showLess") }}
    </b-button>

    <b-input-group class="mt-3">
      <b-form-input size="sm" v-model="commentText"></b-form-input>
      <b-input-group-append>
        <b-button @click="addPostComment" variant="primary" size="sm">
          {{ $t("addComment") }}
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-card>
</template>

<script>
import PostCommentsListItem from "./PostCommentListItem.vue";
export default {
  name: "PostCommentsList",
  components: {
    PostCommentsListItem,
  },
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
    postId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showMore: false,
      commentText: "",
    };
  },
  methods: {
    addPostComment() {
      const createdBy = Number(this.$store.getters.getUser);

      const newPostCommentData = {
        createdBy,
        post: Number(this.postId),
        text: this.commentText,
        community: Number(this.$route.params.communityId) ?? null,
      };

      this.$store.dispatch("createPostComment", newPostCommentData);

      this.commentText = "";

      this.$emit("new-comment-added");
    },
  },
};
</script>

<style>
</style>