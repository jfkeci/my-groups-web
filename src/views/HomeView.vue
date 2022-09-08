<template>
  <div class="home">
    <b-jumbotron header="My Groups" lead="Find your community"> </b-jumbotron>
    <div v-if="!isLoggedIn">
      <b-card class="mt-2" header="">
        <h4>Welcome to MyGroups</h4>
        <p>
          Please log in to your account. Then you can create your own community,
          or ask someone to add you to their community. If you are already a
          part of a community you can se community content
        </p>
        <br />
        <b> <p>Start now</p></b>
        <br />
        <b-button block variant="success" size="sm" to="/login">
          Login
        </b-button>

        <b-button block variant="success" size="sm" to="/register">
          Register
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
