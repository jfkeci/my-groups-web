<template>
  <div>
    <b-card-group deck>
      <b-card class="mt-2" header="Login user">
        <b-form @submit="onSubmit" class="pl-5 pr-5">
          <b-form-group
            class="ml-5 mr-5"
            id="input-group-1"
            label="Email"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="input-group-2"
            label="Password"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" block>Login</b-button>
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