<template>
  <div>
    <b-button-group>
      <b-button size="sm">
        <b-icon
          @click="togglePostLike(post.id)"
          :icon="isPostLiked ? 'hand-thumbs-up-fill' : 'hand-thumbs-up'"
          aria-hidden="true"
        ></b-icon>
      </b-button>

      <b-button
        @click="$bvModal.show(`user-likes-modal-${post.id ?? ''}`)"
        v-if="post.post_likes.length"
        id="show-btn"
        size="sm"
      >
        <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>

    <b-modal :id="`user-likes-modal-${post.id ?? ''}`" hide-footer>
      <template #modal-title> {{ $t("postLikes") }} </template>

      <LikedUsersList :postLikes="post.post_likes" />

      <b-button
        @click="$bvModal.hide(`user-likes-modal-${post.id ?? ''}`)"
        class="mt-3"
        block
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
        user: Number(this.$store.getters.getUser),
      });
    },
  },
  computed: {
    isPostLiked() {
      return this.post.post_likes.some(
        (pl) => Number(pl.users.id) == Number(this.$store.getters.getUser)
      );
    },
  },
};
</script>

<style>
</style>