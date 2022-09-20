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

      <b-row>
        <b-col>
          <b-button
            :to="`/update-community/${this.$route.params.communityId}`"
            variant="primary"
            class="mt-1"
            block
          >
            {{ $t("edit") }}
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :to="`/community/${$route.params.communityId}/info`"
            v-if="isLoggedIn && $route.params.communityId"
            variant="success"
            class="mt-1 mb-1"
            block
          >
            {{ $t("moreInformation") }}
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  async created() {
    if (this.$route.params.communityId) {
      this.$store.dispatch(
        "fetchCommunity",
        Number(this.$route.params.communityId)
      );
    }

    await this.$store.dispatch("isUserCommunityAdmin", {
      user: Number(this.$store.getters.getUser),
      community: Number(this.$route.params.communityId),
    });
  },
  computed: {
    community() {
      return this.$store.getters.getCommunity;
    },
    isUserCommunityAdmin() {
      return this.$store.getters.getIsUserCommunityAdmin;
    },
  },
  watch: {
    $route: {
      handler: function () {
        if (this.$route.params.communityId) {
          this.$store.dispatch(
            "fetchCommunity",
            Number(this.$route.params.communityId)
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