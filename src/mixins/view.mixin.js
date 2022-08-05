import _ from "lodash";

export default {
  methods: {
    setView(view) {
      this.$store.commit("setView", view);
    },
    emitView(view) {
      this.$emit("emit-view", view);
    },
  },
  watch: {
    message: {
      handler: _.debounce(function () {
        this.$store.commit("resetView");
      }, 200),
      deep: true,
    },
  },
};
