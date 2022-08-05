export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedInState;
    },
  },
};
