<template>
  <div>
    <b-card-group deck>
      <b-card class="mt-2" header="Create post">
        <b-form @submit="onSubmit" class="pl-5 pr-5">
          <b-form-group
            class="ml-5 mr-5"
            id="input-group-1"
            label="Title"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.title"
              placeholder="Title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="input-group-2"
            label="Description"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.body"
              placeholder="Description"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="input-group-1"
            label="Post Type"
            label-for="input-1"
          >
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary" block>
            Create Post
          </b-button>
        </b-form>
      </b-card>
    </b-card-group>
    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ postTypes }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CreatePostView",
  data() {
    return {
      form: {
        title: "new-community-post",
        body: "new-community-post-body",
      },
      selected: null,
    };
  },
  async created() {
    if (!this.isLoggedIn) {
      this.$store.commit("setView", "/login");
    }

    await this.$store.dispatch("fetchPostTypes");
  },
  computed: {
    postTypes() {
      return this.$store.getters.getPostTypes;
    },
    options() {
      return this.postTypes.length
        ? this.postTypes.map((pt) => ({ value: pt.id, text: pt.title }))
        : [];
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (!this.selected) {
        this.setMessage("Please select a post type", "danger");
        return;
      }
      this.$store.dispatch("createPost", {
        title: this.form.title,
        createdBy: Number(this.$store.getters.getUser),
      });
    },
  },
};
</script>

<style>
</style>