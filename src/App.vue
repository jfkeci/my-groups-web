<template>
  <div id="app">
    <MainNavbar />
    <b-container class="bv-example-row pt-2">
      <b-row class="text-center">
        <b-col>Left Sidebar</b-col>
        <b-col cols="8">
          <router-view />
        </b-col>
        <b-col>Right Sidebar</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainNavbar from "./components/headers/MainNavbar.vue";

export default {
  name: "App",
  components: { MainNavbar },
};
</script>
