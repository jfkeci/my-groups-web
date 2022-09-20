<template>
  <div>
    <b-form-group
      label-for="input-search-users-1"
      id="input-group-search-users-1"
      label="Search all users on the platform"
    >
      <b-form-input
        id="input-search-users-1"
        placeholder="Search..."
        v-model="text"
        type="text"
        required
      ></b-form-input>
    </b-form-group>

    <div
      :style="{ 'overflow-y': 'scroll', 'max-height': '50vh' }"
      id="user-search-list-group"
      class="mt-2 mb-2"
    >
      <b-list-group>
        <b-list-group-item
          class="d-flex align-items-center"
          v-for="user in users"
          :key="user.id"
        >
          <b-avatar class="mr-3"></b-avatar>

          <span class="mr-auto">
            <p :to="`/profile/${user.id}`">
              {{ `${user.firstName} ${user.lastName}` }}
            </p>
          </span>

          <b-button
            @click="addUserToCommunity(user.id)"
            v-if="
              !user.communities.some(
                (c) => c == Number($route.params.communityId)
              )
            "
            variant="success"
          >
            {{ $t("addUserToCommunity") }}
          </b-button>

          <b-button
            @click="addUserToCommunity(user.id)"
            v-if="
              user.communities.some(
                (c) => c == Number($route.params.communityId)
              ) && Number(user.id) != Number(createdBy)
            "
            variant="danger"
          >
            {{ $t("removeUserFromCommunity") }}
          </b-button>
          <!-- <b-badge>5</b-badge> -->
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CommunityUserManagement",
  props: {
    community: { type: Number, default: null },
    createdBy: { type: Number, default: null },
  },
  data() {
    return {
      text: "",
      users: [],
    };
  },
  methods: {
    async searchUsers() {
      const res = await axios.get(`/search/users/${this.text}`);

      if (res.status == 200) {
        this.users = [];
        this.users.push(...res.data);
      }
    },
    addUserToCommunity(userId) {
      this.$store.dispatch("addUserToCommunity", {
        user: Number(userId),
        community: Number(this.$route.params.communityId),
      });

      this.$emit("user-added-to-community");
    },
    removeUserFromCommunity(userId) {
      this.$store.dispatch("removeUserFromCommunity", {
        user: Number(userId),
        community: Number(this.$route.params.communityId),
      });
    },
  },
  watch: {
    text() {
      this.searchUsers();
    },
  },
};
</script>

<style>
</style>