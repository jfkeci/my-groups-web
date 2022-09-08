<template>
  <div>
    <!-- <div v-if="!isLoggedIn">
      <b-card class="mt-2" header="MyGroups">
        <h4>Welcome to MyGroups</h4>
        <p>
          Please log in to your account. Then you can create your own community,
          or ask someone to add you to their community. If you are already a
          part of a community you can se community content
        </p>
        <br />
        <b> <p>Start now</p></b>
        <br />
        <b-button block variant="success" size="sm" to="/login">
          Login
        </b-button>

        <b-button block variant="success" size="sm" to="/register">
          Register
        </b-button>
      </b-card>
    </div>

    <div v-if="!communities.length">
      <b-card class="mt-2" header="MyGroups">
        <h4>Welcome to MyGroups</h4>
        <p>
          You can create your own community, or ask someone to add you to their
          community. If you are already a part of a community you can se
          community content
        </p>
        <br />
        <b> <p>Create your community now</p></b>
        <br />
        <b-button block variant="success" size="sm" to="/create-community">
          Create community
        </b-button>
      </b-card>
    </div> -->
    <PostsList v-if="isLoggedIn" />
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
          "fetchUserPostsForAllCommunities",
          this.$store.getters.getUser
        );
      }
    }
  },
};
</script>

<style>
</style>