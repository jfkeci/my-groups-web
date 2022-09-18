<template>
  <div>
    <hr class="solid" />
    <h4 id="sidebar-no-header-title" to="/">{{ $t("appName") }}</h4>
    <hr class="solid" />
    <div class="mt-3" v-if="memberCommunities.length && isLoggedIn">
      <b-form-input
        v-model="text"
        class="mb-1"
        :placeholder="$t('searchCommunities')"
      ></b-form-input>

      <b-list-group>
        <b-list-group-item href="#foobar">
          <b-button variant="primary" block to="/create-community">
            <b>+ {{ $t("createCommunity") }}</b>
          </b-button>
        </b-list-group-item>
        <b-list-group-item to="/dashboard">
          {{ $t("all") }}
        </b-list-group-item>
        <CommunityListItem
          v-for="community in memberCommunities"
          :key="community.id"
          :communityListItem="community.communities"
          :text="text"
        />
      </b-list-group>
    </div>
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