<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
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
        email: "jfkeci@test.com",
        password: "test1234",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>