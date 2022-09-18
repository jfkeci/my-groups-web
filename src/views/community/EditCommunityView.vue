<template>
  <b-card class="mt-2" v-if="$route.params.communityId">
    <b-form @submit="onSubmit">
      <b-form-group
        label-for="input-edit-community-title"
        id="input-group-edit-community-title"
        :label="$t('Title')"
      >
        <b-form-input
          id="input-edit-community-title"
          v-if="isUserCommunityAdmin"
          :placeholder="$t('Title')"
          v-model="form.title"
          required
        ></b-form-input>

        <b-form-input
          id="input-edit-community-title-disabled"
          v-if="!isUserCommunityAdmin"
          :placeholder="$t('Title')"
          v-model="form.title"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-for="input-edit-community-description"
        id="input-group-edit-community-description"
        :label="$t('description')"
      >
        <b-form-input
          id="input-edit-community-description"
          :placeholder="$t('description')"
          v-if="isUserCommunityAdmin"
          v-model="form.description"
          required
        ></b-form-input>

        <b-form-input
          id="input-edit-community-description-disabled"
          :placeholder="$t('description')"
          v-if="!isUserCommunityAdmin"
          v-model="form.description"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-button
        v-if="isUserCommunityAdmin"
        variant="primary"
        type="submit"
        block
      >
        {{ $t("updateCommunity") }}
      </b-button>

      <b-button
        v-if="!isUserCommunityAdmin"
        variant="primary"
        type="submit"
        disabled
        block
      >
        {{ $t("updateCommunity") }}
      </b-button>
    </b-form>

    <div class="mt-3" v-if="communityUsers && communityUsers.length">
      <hr />
      <h3 class="mb-3 mt-1">Community users</h3>
      <b-list-group>
        <b-list-group-item
          class="d-flex align-items-center"
          v-for="user in communityUsers"
          :key="user.id"
        >
          <b-avatar class="mr-3"></b-avatar>
          <span class="mr-auto">
            {{ `${user.firstName} ${user.lastName}` }}
          </span>
          <b-badge>{{ formattedDate(user.createdAt) }}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </div>

    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ communityUsers }}</pre>
    </b-card>
  </b-card>
</template>

<script>
export default {
  name: "EditCommunityView",
  data() {
    return {
      form: {
        description: "",
        title: "",
      },
    };
  },
  async mounted() {
    if (this.$route.params.communityId) {
      const communityAndUser = {
        community: Number(this.$route.params.communityId),
        user: Number(this.$store.getters.getUser),
      };

      if (!communityAndUser.user) {
        this.$store.commit("setView", "/dashboard");
      }

      await this.$store.dispatch("isUserCommunityMember", communityAndUser);
      await this.$store.dispatch("isUserCommunityAdmin", communityAndUser);
      await this.$store.dispatch(
        "fetchCommunity",
        this.$route.params.communityId
      );

      await this.$store.dispatch(
        "fetchCommunityUsers",
        this.$route.params.communityId
      );

      await this.$store.dispatch(
        "fetchCommunityUsers",
        this.$route.params.communityId
      );
    } else {
      this.$store.commit("setView", "/dashboard");
    }
  },
  computed: {
    isUserCommunityMember() {
      return this.$store.getters.getIsUserCommunityMember;
    },
    communityUsers() {
      return this.$store.getters.getCommunityUsers;
    },
    community() {
      return this.$store.getters.getCommunity;
    },
  },
  watch: {
    community() {
      this.form.title = this.community.title;
      this.form.description = this.community.description;
    },
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    isCurrentUser(userId) {
      return userId == this.$store.getters.getUser;
    },
    formattedDate(date) {
      const formatted = new Date(date);

      const dateString = `${this.$t(
        "since"
      )}: ${formatted.getDay()}.${formatted.getMonth()}.${formatted.getFullYear()}.`;

      return dateString;
    },
  },
};
</script>

<style>
</style>