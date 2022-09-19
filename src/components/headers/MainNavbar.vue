<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/"> </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="isLoggedIn" to="/dashboard">
            {{ $t("appName") }}
          </b-nav-item>
          <!-- <b-nav-item to="/about">About</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <b-navbar-nav right v-if="!isLoggedIn">
            <b-nav-item to="/login">{{ $t("Login") }}</b-nav-item>
            <b-nav-item to="/register">{{ $t("Register") }}</b-nav-item>
          </b-navbar-nav>

          <CommunityDropdown v-if="isLoggedIn" />

          <b-nav-item-dropdown right v-if="isLoggedIn">
            <template #button-content>
              <em>{{ $t("User") }}</em>
            </template>

            <b-dropdown-item v-if="isLoggedIn" @click="logout">
              {{ $t("Logout") }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <LanguageDropdown />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CommunityDropdown from "../utils/dropdowns/CommunityDropdown.vue";
import LanguageDropdown from "../utils/dropdowns/LanguageDropdown.vue";

export default {
  name: "MainNavbar",
  components: { CommunityDropdown, LanguageDropdown },
  computed: {
    view() {
      return this.$store.getters.getView;
    },
    username() {
      return this.$store.getters.getUsername;
    },
    userId() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    isLoggedIn() {
      console.log("this.isLoggedIn", this.isLoggedIn);
    },
    view() {
      if (this.view) {
        this.$router.push(this.view);
      }
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setToken", false);
      this.$store.commit("setView", "/login");
    },
  },
};
</script>

<style>
</style>