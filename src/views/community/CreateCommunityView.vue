<template>
  <b-card class="mt-2">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" :label="$t('Title')" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          :placeholder="$t('Title')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        :label="$t('description')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.description"
          :placeholder="$t('description')"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>
        {{ $t("createCommunity") }}
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-card>
</template>

<script>
export default {
  name: "CreateCommunityView",
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
    };
  },
  created() {
    if (!this.isLoggedIn) {
      this.$store.commit("setView", "/login");
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("createCommunity", {
        title: this.form.title,
        createdBy: Number(this.$store.getters.getUser),
      });
    },
  },
};
</script>

<style>
</style>