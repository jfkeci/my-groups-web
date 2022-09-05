<template>
  <div>
    <PostsList />
  </div>
</template>

<script>
import PostsList from "../components/resources/post/PostsList.vue";

export default {
  name: "DashboardView",
  components: {
    PostsList,
  },
  data() {
    return {
      communities: [],
    };
  },
  async created() {
    if (this.isLoggedIn) {
      if (this.$route.params.communityId) {
        await this.$store.dispatch(
          "fetchUserCommunityPosts",
          this.$store.getters.getUser,
          this.$route.params.communityId
        );
      } else {
        await this.$store.dispatch(
          "getUserPostsForAllCommunities",
          this.$store.getters.getUser
        );
      }
    }
  },
};
</script>

<style>
</style>