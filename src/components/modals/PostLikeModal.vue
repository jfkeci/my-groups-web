<template>
  <div>
    <b-button-group>
      <b-button size="sm">
        <b-icon icon="hand-thumbs-up" aria-hidden="true"></b-icon>
      </b-button>
      <b-button
        size="sm"
        id="show-btn"
        @click="$bvModal.show(`user-likes-modal-${id ?? ''}`)"
      >
        <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>

    <b-modal :id="`user-likes-modal-${id ?? ''}`" hide-footer>
      <template #modal-title> {{ $t("postLikes") }} </template>
      <LikedUsersList />
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide(`user-likes-modal-${id ?? ''}`)"
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
  props: { id: String },
};
</script>

<style>
</style>