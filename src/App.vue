<template>
  <div id="app">
    <MainNavbar />
    <b-container class="bv-example-row pt-2">
      <b-row class="text-center">
        <b-col>Left Sidebar</b-col>
        <b-col cols="8">
          <MessageUtil />
          <LoaderUtil />
          <router-view />
        </b-col>
        <b-col>Right Sidebar</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainNavbar from "./components/headers/MainNavbar.vue";
import MessageUtil from "./components/utils/MessageUtil.vue";
import LoaderUtil from "./components/utils/LoaderUtil.vue";

export default {
  name: "App",
  components: { MainNavbar, MessageUtil, LoaderUtil },
  created() {
    console.log("app.this.$store.getters.getView", this.$store.getters.getView);
    console.log("token", this.$store.getters.getToken);
  },
};
</script>
