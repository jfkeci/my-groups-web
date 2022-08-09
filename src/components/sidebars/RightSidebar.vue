<template>
  <div>
    <b-button
      v-if="isLoggedIn"
      variant="success"
      class="mt-1 mb-1"
      block
      :to="
        $route.params.communityId
          ? `/community/${$route.params.communityId}/create-post`
          : `/create-post`
      "
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