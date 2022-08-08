<template>
  <div>this is the dashboard</div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      communities: [],
    };
  },
  async created() {
    if (this.$route.params.communityId) {
      await this.$store.dispatch(
        "getUserCommunityPosts",
        this.$store.getters.getUser,
        this.$route.params.communityId
      );
    } else {
      await this.$store.dispatch(
        "getUserPostsForAllCommunities",
        this.$store.getters.getUser
      );
    }
  },
};
</script>

<style>
</style>