<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">MyGroups</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
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

          <CommunityDropdown v-if="isLoggedIn" />
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item v-if="isLoggedIn" to="/profile"
              >Profile</b-dropdown-item
            >
            <b-dropdown-item v-if="isLoggedIn" @click="logout"
              >Logout</b-dropdown-item
            >
            <b-dropdown-item v-if="!isLoggedIn" to="/login"
              >Login</b-dropdown-item
            >
            <b-dropdown-item v-if="!isLoggedIn" to="/register"
              >Register</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CommunityDropdown from "../utils/dropdowns/CommunityDropdown.vue";

export default {
  name: "MainNavbar",
  components: { CommunityDropdown },
  computed: {
    view() {
      return this.$store.getters.getView;
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
    },
  },
};
</script>

<style>
</style>