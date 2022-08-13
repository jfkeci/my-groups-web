<template>
  <div>
    <b-button-group>
      <b-button
        size="sm"
        id="show-btn"
        @click="$bvModal.show(`user-comments-modal-${id ?? ''}`)"
      >
        <b-icon icon="chat" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>

    <b-modal :id="`user-comments-modal-${id ?? ''}`" hide-footer>
      <template #modal-title> Comments </template>
      <PostCommentsList />
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide(`user-comments-modal-${id ?? ''}`)"
      >
        Close
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import PostCommentsList from "../resources/post/post-comments/PostCommentsList.vue";
export default {
  name: "PostCommentsModal",
  components: {
    PostCommentsList,
  },
  props: {
    id: String,
  },
};
</script>

<style>
</style>