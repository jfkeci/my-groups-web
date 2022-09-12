<template>
  <div class="home">
    <b-jumbotron :header="$t('appName')" :lead="$t('findYourCommunity')">
    </b-jumbotron>
    <div v-if="!isLoggedIn">
      <b-card class="mt-2" header="">
        <h4>{{ $t("welcomeTo") }} {{ $t("appName") }}</h4>
        <p>
          {{ $t("homeMessage") }}
        </p>
        <br />
        <b>
          <p>{{ $t("startNow") }}</p>
        </b>
        <br />
        <b-button block variant="success" size="sm" to="/login">
          {{ $t("Login") }}
        </b-button>

        <b-button block variant="success" size="sm" to="/register">
          {{ $t("Register") }}
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
