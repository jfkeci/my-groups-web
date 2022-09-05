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

      <template #footer>
        <b-row>
          <b-col cols="1"><PostLikeModal /></b-col>
          <b-col cols="1" class="ml-3"><PostCommentsModal /></b-col>
          <!-- <b-col><ConfirmationModal /></b-col> -->
        </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
import PostLikeModal from "../../modals/PostLikeModal.vue";
import PostCommentsModal from "../../modals/PostCommentsModal.vue";
/* import ConfirmationModal from "../../modals/ConfirmationModal.vue"; */

export default {
  name: "PostsListItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    PostLikeModal,
    PostCommentsModal,
    /* ConfirmationModal, */
  },
};
</script>

<style>
</style>