<template>
  <div id="app">
    <MainNavbar />

    <div class="pl-5 pr-5">
      <b-row>
        <b-col><LeftSidebar class="mt-2" /></b-col>
        <b-col cols="7">
          <MessageUtil />
          <LoaderUtil />
          <router-view />
        </b-col>
        <b-col><RightSidebar class="mt-2" /></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import MainNavbar from "./components/headers/MainNavbar.vue";
import MessageUtil from "./components/utils/MessageUtil.vue";
import LoaderUtil from "./components/utils/LoaderUtil.vue";
import LeftSidebar from "./components/sidebars/LeftSidebar.vue";
import RightSidebar from "./components/sidebars/RightSidebar.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    LoaderUtil,
    MessageUtil,
    LeftSidebar,
    RightSidebar,
  },
  created() {
    console.log("app.this.$store.getters.getView", this.$store.getters.getView);
    console.log("App.created.token", this.$store.getters.getToken);
  },
};
</script>
