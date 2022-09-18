<template>
  <div></div>
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

    setTimeout(() => {
      if (!this.isUserCommunityMember) {
        this.$store.commit("setView", "/dashboard");
      }
    }, 500);
  },
  computed: {
    isUserCommunityMember() {
      return this.$store.getters.getIsUserCommunityMember;
    },
  },
};
</script>

<style>
</style>