<template>
  <div v-if="community">
    <b-card
      :title="community.title"
      :img-src="community.image ?? 'https://picsum.photos/200/300'"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ community.description ?? "" }}
      </b-card-text>

      <b-button variant="primary" block>Edit</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CommunityInfo",
  computed: {
    community() {
      return this.$store.getters.getCommunity;
    },
  },
  created() {
    if (this.$route.params.communityId) {
      this.$store.dispatch("fetchCommunity", this.$route.params.communityId);
    }
  },
  watch: {
    $route: {
      handler: function () {
        console.log(this.$route.params);
        if (this.$route.params.communityId) {
          this.$store.dispatch(
            "fetchCommunity",
            this.$route.params.communityId
          );
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>