<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Confirm password"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.confirmPassword"
          placeholder="Confirm Password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="First Name" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.firstName"
          placeholder="First Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="First Name" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.lastName"
          placeholder="Last Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>Register</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UserRegisterView",
  data() {
    return {
      form: {
        username: "jfkeci",
        email: "jfkeci@gmail.com",
        password: "test1234",
        confirmPassword: "test1234",
        firstName: "filip",
        lastName: "kecilobas",
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
      this.$store.dispatch("registerUser", this.form);
    },
  },
};
</script>

<style>
</style>