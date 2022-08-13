<template>
  <div>
    <b-list-group>
      <PostCommentsListItem />
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
};
</script>

<style>
</style>