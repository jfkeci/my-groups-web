export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedInState;
    },
    isAdmin() {
      return this.$store.getters.isUserAdmin;
    },
  },
};
