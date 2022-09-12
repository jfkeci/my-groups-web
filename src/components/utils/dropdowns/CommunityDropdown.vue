<template>
  <b-nav-item-dropdown right>
    <template #button-content>
      <em>{{ $t("communities") }}</em>
    </template>
    <div v-if="memberCommunities.length > 0">
      <b-dropdown-item
        v-for="community in memberCommunities"
        :key="community.id"
        :to="`/dashboard/${community.communities.id}`"
      >
        {{ community.communities.title }}
      </b-dropdown-item>
    </div>
    <b-dropdown-item>
      <b-button variant="primary" block to="/create-community">
        <b>+ {{ $t("add") }}</b>
      </b-button>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "CommunityDropdown",
  async created() {
    if (this.isLoggedIn) {
      await this.$store.dispatch(
        "fetchMemberCommunities",
        this.$store.getters.getUser
      );
    }
  },
  computed: {
    memberCommunities() {
      return this.$store.getters.getMemberCommunities;
    },
  },
};
</script>

<style>
</style>