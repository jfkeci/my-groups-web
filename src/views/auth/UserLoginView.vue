<template>
  <div>
    <b-card-group deck>
      <b-card class="mt-2" :header="$t('loginUser')">
        <b-form @submit="onSubmit" class="pl-5 pr-5">
          <b-form-group
            class="ml-5 mr-5"
            id="input-group-1"
            :label="$t('Email')"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              :placeholder="$t('Email')"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="input-group-2"
            :label="$t('Password')"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              :placeholder="$t('Password')"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button class="mt-3" type="submit" variant="primary" block>
            {{ $t("Login") }}
          </b-button>

          <h4 class="mt-3">
            {{ $t("dontHaveAccount") }}
            <a href="/register">
              {{ $t("Register") }}
            </a>
          </h4>
        </b-form>
      </b-card>
    </b-card-group>

    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UserLoginView",
  data() {
    return {
      form: {
        email: "jfkeci@gmail.com",
        password: "test1234",
      },
    };
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.commit("setView", "/dashboard");
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("loginUser", this.form);
    },
  },
};
</script>