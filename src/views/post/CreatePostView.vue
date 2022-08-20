<template>
  <div>
    <b-card-group deck>
      <b-card v-if="communities.length" class="mt-2" header="Create post">
        <b-form class="pl-5 pr-5">
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
            <small>{{ postTypeDescription }}</small>
            <b-form-select
              v-model="selectedType"
              :options="postTypeOptions"
            ></b-form-select>
          </b-form-group>

          <b-button @click="createPost()" variant="primary" block>
            Create Post
          </b-button>
        </b-form>
      </b-card>
      <b-card
        v-if="!communities.length"
        class="mt-2"
        header="Create communities"
      >
        <h4>You dont belong to any community</h4>
        <p>
          You can create your own community, or ask someone to add you to their
          community
        </p>

        <b-button
          block
          class="m-3"
          variant="success"
          size="sm"
          to="/create-community"
        >
          Create community
        </b-button>
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
        body: "new-community-post-body",
        title: "new-community-post",
      },
      selectedCommunity: null,
      selectedType: "info",
    };
  },
  async mounted() {
    if (!this.isLoggedIn) {
      this.$store.commit("setView", "/login");
    }

    if (this.$route.params.communityId) {
      this.selectedCommunity = this.$route.params.communityId;
    }

    await this.$store.dispatch("fetchPostTypes");
  },
  computed: {
    postTypes() {
      return this.$store.getters.getPostTypes;
    },
    postTypeOptions() {
      return this.postTypes.length
        ? this.postTypes.map((pt) => ({ value: pt.id, text: pt.title }))
        : [];
    },
    postTypeDescription() {
      const type = this.postTypes.filter((pt) => pt.id == this.selectedType);

      return type ? type[0].description : "";
    },
    communities() {
      const communityMemberships = this.$store.getters.getMemberCommunities;

      if (!communityMemberships || !communityMemberships.length) {
        return [];
      }

      console.log(communityMemberships.map((cm) => cm.communities));

      return communityMemberships.map((cm) => cm.communities);
    },
  },
  methods: {
    createPost() {
      console.log("HERE");
      if (!this.selectedType) {
        this.setMessage("Please select a post type", "danger");
        return;
      }
      this.$store.dispatch("createCommunityPost", {
        title: this.form.title,
        body: this.form.body ?? "",
        createdBy: Number(this.$store.getters.getUser),
      });
    },
  },
};
</script>

<style>
</style>