<template>
  <div>
    <b-card-group deck>
      <b-card class="mt-2" :header="$t('registerUser')">
        <b-form @submit="onSubmit" class="pl-5 pr-5">
          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-1"
            :label="$t('Username')"
            label-for="register-input-1"
          >
            <b-form-input
              id="register-input-1"
              v-model="form.username"
              :placeholder="$t('Username')"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-2"
            :label="$t('Email')"
            label-for="register-input-2"
          >
            <b-form-input
              id="register-input-2"
              v-model="form.email"
              type="email"
              :placeholder="$t('Email')"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-3"
            :label="$t('Password')"
            label-for="register-input-3"
          >
            <b-form-input
              id="register-input-3"
              v-model="form.password"
              :placeholder="$t('Password')"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-4"
            :label="$t('confirmPassword')"
            label-for="register-input-4"
          >
            <b-form-input
              id="register-input-4"
              v-model="form.confirmPassword"
              :placeholder="$t('confirmPassword')"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-5"
            :label="$t('firstName')"
            label-for="register-input-5"
          >
            <b-form-input
              id="register-input-5"
              v-model="form.firstName"
              :placeholder="$t('firstName')"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-6"
            :label="$t('lastName')"
            label-for="register-input-6"
          >
            <b-form-input
              id="register-input-6"
              v-model="form.lastName"
              :placeholder="$t('lastName')"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="register-input-group-7"
            :label="$t('newSuperAdmin?')"
            label-for="register-input-7"
            v-if="isUserSuperAdmin"
          >
            <b-form-checkbox
              id="register-is-admin-checkbox"
              v-model="form.isAdmin"
              name="register-is-admin-checkbox"
            >
              {{ $t("createSuperAdminUser") }}
            </b-form-checkbox>
          </b-form-group>

          <b-button class="mt-3" type="submit" variant="primary" block>
            {{ $t("Register") }}
          </b-button>

          <h4 class="mt-3">
            {{ $t("alreadyHaveAccount") }}
            <a href="/login">
              {{ $t("Login") }}
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
  name: "UserRegisterView",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
      },
    };
  },
  created() {
    if (this.adminCreatingNewUser) {
      this.$store.commit("setView", "/dashboard");
    }
  },
  computed: {
    adminCreatingNewUser() {
      return this.isLoggedIn && this.$store.getters.isUserSuperAdmin;
    },
  },
  watch: {
    isUserSuperAdmin() {
      this.form.isAdmin = this.$store.getters.isUserSuperAdmin;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch(
        "registerUser",
        this.form.isAdmin
          ? { ...this.form, adminVoucher: this.$store.getters.getUser }
          : this.form
      );
    },
  },
};
</script>

<style>
</style>