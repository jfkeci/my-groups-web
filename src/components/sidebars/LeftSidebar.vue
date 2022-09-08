<template>
  <div>
    <b-button
      variant="success"
      class="mt-1 mb-1"
      block
      :to="isLoggedIn ? '/create-post' : '/login'"
    >
      Add post
    </b-button>

    <CommunityList v-if="isLoggedIn" />
  </div>
</template>

<script>
import CommunityList from "../resources/community/CommunityList.vue";

export default {
  name: "LeftSidebar",
  components: {
    CommunityList,
  },
};
</script>

<style>
</style>