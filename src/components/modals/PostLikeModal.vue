<template>
  <div>
    <b-button-group>
      <b-button size="sm">
        <b-icon icon="hand-thumbs-up-fill" aria-hidden="true"></b-icon>
      </b-button>
      <b-button
        size="sm"
        id="show-btn"
        @click="$bvModal.show(`user-likes-modal-${post.id ?? ''}`)"
      >
        <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>

    <b-modal :id="`user-likes-modal-${post.id ?? ''}`" hide-footer>
      <template #modal-title> {{ $t("postLikes") }} </template>
      <LikedUsersList :postLikes="post.post_likes" />
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide(`user-likes-modal-${post.id ?? ''}`)"
      >
        {{ $t("close") }}
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import LikedUsersList from "../resources/post/post-likes/LikedUsersList.vue";
export default {
  name: "PostLikeModal",
  components: {
    LikedUsersList,
  },
  props: { post: { type: Object, required: true } },
  methods: {
    togglePostLike() {
      this.$store.dispatch("togglePostLike", {
        post: Number(this.post.id),
        user: Number(this.$store.getters.getUsrer),
      });
    },
  },
};
</script>

<style>
</style>