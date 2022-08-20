<template>
  <b-spinner class="text-center" v-if="loading" variant="primary" label="Spinning"></b-spinner>
</template>

<script>
import _ from "lodash";
export default {
  name: "LoaderUtil",
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  watch: {
    loading: {
      handler: _.debounce(function () {
        this.$store.commit("setLoading", false);
      }, 20000),
      deep: true,
    },
  },
};
</script>

<style>
</style>