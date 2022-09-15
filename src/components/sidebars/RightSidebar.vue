<template>
  <div>
    <b-button
      v-if="isLoggedIn && isUserSuperAdmin && $route.params.communityId"
      variant="success"
      class="mt-1 mb-1"
      block
      :to="`/community/${$route.params.communityId}/edit`"
    >
      {{ $t("edit") }}
    </b-button>

    <CommunityInfo />
  </div>
</template>

<script>
import CommunityInfo from "../cards/CommunityInfo.vue";
export default {
  name: "RightSidebar",
  components: {
    CommunityInfo,
  },
  computed: {
    isUserSuperAdmin() {
      return this.$store.getters.isUserSuperAdmin;
    },
  },
};
</script>

<style>
</style>