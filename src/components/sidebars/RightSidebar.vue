<template>
  <div>
    <b-button
      v-if="isLoggedIn && $route.params.communityId"
      variant="success"
      class="mt-1 mb-1"
      block
      :to="`/community/${$route.params.communityId}/create-post`"
    >
      Add post
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
};
</script>

<style>
</style>