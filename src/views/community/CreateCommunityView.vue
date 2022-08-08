<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Title" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Description" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.description"
          placeholder="Description"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>
        Create Community
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CreateCommunityView",
  data() {
    return {
      form: {
        title: "new-community",
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