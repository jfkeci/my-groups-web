<template>
  <div>
    <b-card-group deck>
      <b-card v-if="communities.length" class="mt-2" header="Create post">
        <b-form class="pl-5 pr-5">
          <b-form-group
            label-for="create-post-community-dropdown-input"
            id="create-post-community-dropdown-input-group"
            v-if="!$route.params.communityId"
            label="Select community"
            class="ml-5 mr-5"
          >
            <b-form-select
              id="create-post-community-dropdown-input"
              v-model="selectedCommunity"
              :options="communities"
              size="sm"
            ></b-form-select>
          </b-form-group>

          <b-form-group
            label="Title"
            class="ml-5 mr-5"
            id="create-post-input-group-1"
            label-for="create-post-input-1"
          >
            <b-form-input
              id="create-post-input-1"
              v-model="form.title"
              placeholder="Title"
              size="sm"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="ml-5 mr-5"
            label="Description"
            id="create-post-input-group-2"
            label-for="create-post-input-2"
          >
            <b-form-textarea
              placeholder="Add description"
              id="create-post-input-2"
              v-model="form.body"
              rows="3"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label="Image"
            class="ml-5 mr-5"
            id="create-post-input-group-4"
            label-for="create-post-input-4"
          >
            <b-form-file
              placeholder="Choose a image or drop it here..."
              drop-placeholder="Drop image here..."
              :state="Boolean(form.image)"
              id="create-post-input-4"
              v-model="form.image"
              size="sm"
            ></b-form-file>
            <small class="mt-3" v-if="form.image">
              Selected image: {{ form.image ? form.image : "" }}
            </small>
          </b-form-group>

          <b-form-group
            label="Post Type"
            class="ml-5 mr-5"
            id="create-post-input-group-3"
            label-for="create-post-input-3"
          >
            <small>{{ postTypeDescription }}</small>
            <b-form-select
              :options="postTypeOptions"
              v-model="selectedType"
              size="sm"
            ></b-form-select>
          </b-form-group>

          <EventDatePicker
            v-if="selectedType == 'event'"
            @set-event-date="setEventDate"
          />
          <PollOptionsCreator
            v-if="selectedType == 'poll'"
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
        image: null,
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

      return communityMemberships.map((cm) => ({
        value: cm.communities.id,
        text: cm.communities.title,
      }));
    },
  },
  watch: {
    communities: {
      handler: function () {
        if (!this.$route.params.communityId) {
          if (this.communities.length) {
            this.selectedCommunity = this.communities[0]["value"];
          }
        }
      },
      deep: true,
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
            createdBy: Number(this.$store.getters.getUser),
            date: null,
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