<template>
  <div>
    <!-- <div v-if="!communities.length">
      <b-jumbotron :header="$t('appName')" :lead="$t('findYourCommunity')">
      </b-jumbotron>
      <div>
        <b-card class="mt-2" header="">
          <h4>{{ $t("welcomeTo") }} {{ $t("appName") }}</h4>
          <p>
            {{ $t("homeMessage") }}
          </p>
          <br />
          <b>
            <p>{{ $t("startNow") }}</p>
          </b>
          <br />
          <b-button block variant="success" size="sm" to="/create-community">
            {{ $t("createCommunity") }}
          </b-button>
        </b-card>
      </div>
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
  async mounted() {
    if (this.isLoggedIn) {
      if (this.$route.params.communityId) {
        await this.$store.dispatch("fetchUserCommunityPosts", {
          userId: this.$store.getters.getUser,
          communityId: this.$route.params.communityId,
        });
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