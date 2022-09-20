<template>
  <div v-if="$route.params.userId && currentUserProfile" class="mt-2">
    <b-list-group>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">
          {{ `${currentUserProfile.firstName} ${currentUserProfile.lastName}` }}
        </span>
        <b-badge>{{
          `${$t("since")} ${formattedDate(currentUserProfile.createdAt)}`
        }}</b-badge>
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
  methods: {
    formattedDate(date) {
      const formatted = new Date(date);

      const dateString = `${formatted.getDay()}.${formatted.getMonth()}.${formatted.getFullYear()}.`;

      return dateString;
    },
  },
};
</script>

<style>
</style>