<template>
  <div>
    <b-card-group deck>
      <b-card v-if="communities.length" class="mt-2" header="Create post">
        <b-form class="pl-5 pr-5">
          <b-form-group
            class="ml-5 mr-5"
            id="create-post-input-group-1"
            label="Title"
            label-for="create-post-input-1"
          >
            <b-form-input
              id="create-post-input-1"
              v-model="form.title"
              placeholder="Title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="create-post-input-group-2"
            label="Description"
            label-for="create-post-input-2"
          >
            <b-form-input
              id="create-post-input-2"
              v-model="form.body"
              placeholder="Description"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            id="create-post-input-group-3"
            label="Post Type"
            label-for="create-post-input-3"
          >
            <small>{{ postTypeDescription }}</small>
            <b-form-select
              v-model="selectedType"
              :options="postTypeOptions"
            ></b-form-select>
          </b-form-group>

          <EventDatePicker
            v-if="selectedType == 'event'"
            @set-event-date="setEventDate"
          />
          <PollOptionsCreator
            @set-option-values="setPollData"
            @are-options-valid="pollOptionsValidity"
          />

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
import EventDatePicker from "../../components/resources/post/event-post/EventDatePicker.vue";
import PollOptionsCreator from "../../components/resources/post/poll-post/PollOptionsCreator.vue";

export default {
  name: "CreatePostView",
  components: {
    EventDatePicker,
    PollOptionsCreator,
  },
  data() {
    return {
      form: {
        body: "new-community-post-body",
        title: "new-community-post",
        date: null,
      },
      selectedCommunity: null,
      selectedType: "info",
      pollData: null,
      validPollOptions: false,
    };
  },
  async mounted() {
    /* if (!this.isLoggedIn) {
      this.$store.commit("setView", "/login");
    } */

    if (this.$route.params.communityId) {
      this.selectedCommunity = this.$route.params.communityId;
    }
  },
  computed: {
    postTypes() {
      return this.$store.getters.getPostTypes;
    },
    postTypeDescription() {
      const type = this.postTypes.find((pt) => pt.type == this.selectedType);

      return type ? type.description : "";
    },
    postTypeOptions() {
      return this.postTypes.length
        ? this.postTypes.map((pt) => ({ value: pt.type, text: pt.title }))
        : [{ value: "info", text: "Info" }];
    },
    communities() {
      const communityMemberships = this.$store.getters.getMemberCommunities;

      if (!communityMemberships || !communityMemberships.length) {
        return [];
      }

      return communityMemberships.map((cm) => cm.communities);
    },
  },
  methods: {
    setEventDate(date) {
      this.form.date = date;
    },
    setPollData(data) {
      this.pollData = data;
    },
    pollOptionsValidity(validPollOptions) {
      this.validPollOptions = validPollOptions;
    },
    createPost() {
      if (!this.title.length) {
        this.setMessage("Title required", "danger");
        return;
      }

      if (!this.selectedType) {
        this.setMessage("Please select a post type", "danger");
        return;
      }

      if (this.selectedType == "info") {
        this.$store.dispatch("createCommunityPost", {
          title: this.form.title,
          body: this.form.body ?? "",
          type: this.selectedType,
          date: this.date ?? null,
          createdBy: Number(this.$store.getters.getUser),
        });
      }

      if (this.selectedType == "poll") {
        this.$store.dispatch("createCommunityPollPost", {
          post: {
            title: this.form.title,
            body: this.form.body ?? "",
            type: this.selectedType,
            date: null,
            createdBy: Number(this.$store.getters.getUser),
          },
          options: this.pollData,
        });
      }
    },
  },
};
</script>

<style>
</style>