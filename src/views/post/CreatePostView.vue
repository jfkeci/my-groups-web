<template>
  <div>
    <b-card-group deck>
      <b-card v-if="communities.length" class="mt-2" :header="$t('createPost')">
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
              v-model="form.community"
              :options="communities"
              size="sm"
            ></b-form-select>
          </b-form-group>

          <b-form-group
            label-for="create-post-input-1"
            id="create-post-input-group-1"
            :label="$t('Title')"
            class="ml-5 mr-5"
          >
            <b-form-input
              :placeholder="$t('Title')"
              id="create-post-input-1"
              v-model="form.title"
              size="sm"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-for="create-post-input-2"
            id="create-post-input-group-2"
            :label="$t('Description')"
            class="ml-5 mr-5"
          >
            <b-form-textarea
              :placeholder="$t('Description')"
              id="create-post-input-2"
              v-model="form.body"
              rows="3"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            label-for="create-post-input-4"
            id="create-post-input-group-4"
            :label="$t('image')"
            class="ml-5 mr-5"
          >
            <b-form-file
              :placeholder="$t('chooseOrDropImage')"
              :drop-placeholder="$t('dropImageHere')"
              :state="Boolean(form.image)"
              id="create-post-input-4"
              v-model="form.image"
              size="sm"
            ></b-form-file>
            <small class="mt-3" v-if="form.image">
              {{ $t("selectedImage") }}: {{ form.image ? form.image : "" }}
            </small>
          </b-form-group>

          <b-form-group
            label-for="create-post-input-3"
            id="create-post-input-group-3"
            :label="$t('postType')"
            class="ml-5 mr-5"
          >
            <small>{{ postTypeDescription }}</small>
            <b-form-select
              :options="postTypeOptions"
              v-model="form.type"
              size="sm"
            ></b-form-select>
          </b-form-group>

          <EventDatePicker
            @set-event-date="setEventDate"
            v-if="form.type == 'event'"
          />
          <PollOptionsCreator
            @are-options-valid="pollOptionsValidity"
            @set-option-values="setPollData"
            v-if="form.type == 'poll'"
          />

          <b-button @click="createPost()" variant="primary" block>
            {{ $t("createPost") }}
          </b-button>
        </b-form>
      </b-card>
      <b-card
        :header="$t('createCommunity')"
        v-if="!communities.length"
        class="mt-2"
      >
        <h4>{{ $t("cantCreatePost") }}</h4>
        <p>{{ $t("createOrJoinCommunity") }}</p>

        <b-button
          to="/create-community"
          variant="success"
          class="m-3"
          size="sm"
          block
        >
          {{ $t("createCommunity") }}
        </b-button>
      </b-card>
    </b-card-group>

    <b-row v-if="$dbg">
      <b-col>
        <b-card class="mt-3" header="Communities">
          <pre class="m-0">{{ communities }}</pre>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="mt-3" header="Form">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="mt-3" header="Post Types">
          <pre class="m-0">{{ postTypes }}</pre>
        </b-card>
      </b-col>
    </b-row>
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
        body: "",
        title: "",
        date: null,
        image: null,
        type: "info",
        community: null,
      },
      pollData: null,
      validPollOptions: false,
    };
  },
  async mounted() {
    if (!this.isLoggedIn) {
      this.$store.commit("setView", "/login");
    }

    if (this.$route.params.communityId) {
      this.selectedCommunity = Number(this.$route.params.communityId);
    }
  },
  computed: {
    postTypes() {
      return this.$store.getters.getPostTypes;
    },
    postTypeDescription() {
      const type = this.postTypes.find((pt) => pt.type == this.form.type);

      return type ? this.$t(type.description) : "";
    },
    postTypeOptions() {
      return this.postTypes.length
        ? this.postTypes.map((pt) => ({
            value: pt.type,
            text: this.$t(pt.title),
          }))
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
          if (this.communities.length > 0) {
            this.setSelectedCommunity(this.communities[0]["value"]);
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
    setSelectedCommunity(communityId) {
      this.form.community = Number(communityId);
    },
    createPost() {
      let newPostData;

      if (!this.form.type) {
        this.setMessage("Please select a post type", "danger");
        return;
      }

      let createdBy = Number(this.$store.getters.getUser);

      if (this.form.type == "info" || this.form.type == "event") {
        newPostData = {
          ...this.form,
          createdBy,
          community: Number(
            this.selectedCommunity ?? this.$route.params.communityId
          ),
        };
      }

      if (this.form.type == "poll") {
        newPostData = {
          ...this.form,
          createdBy,
          options: this.pollData.options.map((o) => ({ option: o.title })),
          community: Number(
            this.selectedCommunity ?? this.$route.params.communityId
          ),
        };
      }

      this.$store.dispatch("createCommunityPost", newPostData);
    },
  },
};
</script>

<style>
</style>