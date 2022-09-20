<template>
  <div>
    <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      :title="community.title"
      img-alt="Image"
      tag="article"
      img-top
      class="mb-2"
    >
      <b-card-text>
        {{ community.description }}
      </b-card-text>

      <b-button href="#" variant="primary">Delete</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CommunityInfoView",
  async created() {
    if (!this.$route.params.communityId) {
      this.$store.commit("setView", "/dashboard");
    }

    await this.$store.dispatch("isUserCommunityMember", {
      user: this.$store.getters.getUser,
      community: this.$route.params.communityId,
    });

    await this.$store.dispatch(
      "fetchCommunity",
      Number(this.$route.params.communityId)
    );
  },
  computed: {
    isUserCommunityMember() {
      return this.$store.getters.getIsUserCommunityMember;
    },
    community() {
      return this.$store.getters.getCommunity;
    },
  },
  watch: {
    isUserCommunityMember() {
      if (!this.isUserCommunityMember) {
        this.$store.commit("setView", "/dashboard");
      }
    },
  },
};
</script>

<style>
</style>