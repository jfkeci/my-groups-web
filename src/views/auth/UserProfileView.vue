<template>
  <div v-if="$route.params.userId && currentUserProfile" class="mt-2">
    <b-list-group>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <b-badge>5</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "UserProfileView",
  mounted() {
    console.log("ProfileView", this.currentUser);

    this.$store.dispatch("getUserProfile", {
      user: Number(this.$route.params.userId),
      currentUser: Number(this.currentUser),
    });
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
    currentUserProfile() {
      return this.$store.getters.getProfile;
    },
  },
};
</script>

<style>
</style>