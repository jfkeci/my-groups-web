export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedInState;
    },
    isUserSuperAdmin() {
      return this.$store.getters.isUserSuperAdmin;
    },
  },
};
