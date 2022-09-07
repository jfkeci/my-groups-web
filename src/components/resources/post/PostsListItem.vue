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
        <b-row> </b-row>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PostsListItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style>
</style>