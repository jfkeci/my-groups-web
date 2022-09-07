<template>
  <div>
    <b-list-group v-if="!showMore && comments.length">
      <PostCommentsListItem />
      <b-list-group-item class="d-flex align-items-center">
        <b-button size="sm" @click="showMore = true" block>
          Show more
        </b-button>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
        <b-input-group class="mt-3">
          <b-form-input size="sm" v-model="commentText"></b-form-input>
          <b-input-group-append>
            <b-button variant="primary" size="sm">Add comment</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-list-group-item>
    </b-list-group>

    <b-list-group v-if="showMore && comments.length">
      <PostCommentsListItem />
      <PostCommentsListItem />
      <b-list-group-item class="d-flex align-items-center">
        <b-button size="sm" @click="showMore = false" block>
          Show less
        </b-button>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center">
        <b-input-group class="mt-3">
          <b-form-input size="sm" v-model="commentText"></b-form-input>
          <b-input-group-append>
            <b-button variant="primary" size="sm">Add comment</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-list-group-item>
    </b-list-group>
  </div>
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
  },
  data() {
    return {
      showMore: false,
      commentText: "",
    };
  },
};
</script>

<style>
</style>