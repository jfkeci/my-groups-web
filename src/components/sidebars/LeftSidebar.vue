<template>
  <div>
    <b-button
      v-if="!isLoggedIn"
      variant="success"
      class="mt-1 mb-1"
      block
      to="/login"
    >
      Add post
    </b-button>

    <CommunityList v-if="isLoggedIn" />
  </div>
</template>

<script>
import CommunityList from "../lists/CommunityList.vue";

export default {
  name: "LeftSidebar",
  components: {
    CommunityList,
  },
};
</script>

<style>
</style>