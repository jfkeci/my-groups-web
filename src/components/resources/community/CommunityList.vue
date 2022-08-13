<template>
  <div>
    <h4 id="sidebar-no-header-title" to="/">MyGroups</h4>
    <div>
      <b-form-input
        v-model="text"
        placeholder="Search communities"
      ></b-form-input>
    </div>
    <b-list-group v-if="memberCommunities.length > 0 && isLoggedIn">
      <b-list-group-item href="#foobar">
        <b-button variant="primary" block to="/create-community">
          <b>+ Add</b>
        </b-button>
      </b-list-group-item>
      <b-list-group-item to="/dashboard">All</b-list-group-item>
      <CommunityListItem
        v-for="community in memberCommunities"
        :key="community.id"
        :communityListItem="community.communities"
        :text="text"
      />
    </b-list-group>
  </div>
</template>

<script>
import CommunityListItem from "./CommunityListItem.vue";

export default {
  name: "CommunityList",
  components: {
    CommunityListItem,
  },
  data() {
    return {
      text: "",
    };
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