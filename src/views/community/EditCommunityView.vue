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
          v-if="isUserCommunityAdmin || isUserSuperAdmin"
          :placeholder="$t('Title')"
          v-model="form.title"
          required
        ></b-form-input>

        <b-form-input
          id="input-edit-community-title-disabled"
          v-if="!isUserCommunityAdmin || isUserSuperAdmin"
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
          v-if="isUserCommunityAdmin || isUserSuperAdmin"
          v-model="form.description"
          required
        ></b-form-input>

        <b-form-input
          id="input-edit-community-description-disabled"
          :placeholder="$t('description')"
          v-if="!isUserCommunityAdmin || isUserSuperAdmin"
          v-model="form.description"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-button
        v-if="isUserCommunityAdmin || isUserSuperAdmin"
        variant="primary"
        type="submit"
        block
      >
        {{ $t("updateCommunity") }}
      </b-button>

      <b-button
        v-if="!isUserCommunityAdmin || isUserSuperAdmin"
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
      <h3 class="mb-3 mt-1">{{ $t("communityUsers") }}</h3>
      <b-list-group>
        <b-list-group-item
          class="d-flex align-items-center"
          v-for="user in communityUsers"
          :key="user.id"
          :to="`/profile/${user.id}`"
        >
          <b-avatar class="mr-3"></b-avatar>

          <span class="mr-auto">
            <p :to="`/profile/${user.id}`">
              {{ `${user.firstName} ${user.lastName}` }}
            </p>
            <!-- isUserCommunityAdmin || isUserSuperAdmin -->

            <ConfirmationModal
              v-if="user.id != createdBy"
              :buttonText="$t('removeFromCommunity')"
              :title="$t('removeUserConfirmation')"
              action="removeUserFromCommunity"
              :id="`remove-user-${user.id}`"
              :confirmText="$t('remove')"
              :buttonVariant="'danger'"
              icon="trash"
              :data="{
                user: Number(user.id),
                community: Number($route.params.communityId),
              }"
            />
          </span>
          <b-badge v-if="user.id != createdBy">
            {{ $t("memberFrom") }} {{ formattedDate(user.createdAt) }}
          </b-badge>
          <b-badge v-if="user.id == createdBy">
            {{ $t("adminFrom") }} {{ formattedDate(user.createdAt) }}
          </b-badge>
        </b-list-group-item>
      </b-list-group>

      <hr />

      <CommunityUserManagement
        :community="Number($route.params.communityId)"
        :createdBy="Number(createdBy)"
      />
    </div>

    <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
      <pre class="m-0">{{ communityUsers }}</pre>
    </b-card>
  </b-card>
</template>

<script>
import CommunityUserManagement from "../../components/resources/user/CommunityUserManagement.vue";
import ConfirmationModal from "../../components/modals/ConfirmationModal.vue";

export default {
  name: "EditCommunityView",
  components: { CommunityUserManagement, ConfirmationModal },
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
      await this.$store.dispatch(
        "fetchCommunityUsers",
        this.$route.params.communityId
      );
      await this.$store.dispatch("isUserCommunityMember", communityAndUser);
      await this.$store.dispatch("isUserCommunityAdmin", communityAndUser);
      await this.$store.dispatch(
        "fetchCommunity",
        this.$route.params.communityId
      );
    } else {
      this.$store.commit("setView", "/dashboard");
    }
  },
  computed: {
    isUserCommunityAdmin() {
      return this.$store.getters.getIsUserCommunityAdmin;
    },
    isUserCommunityMember() {
      return this.$store.getters.getIsUserCommunityMember;
    },
    communityUsers() {
      return this.$store.getters.getCommunityUsers;
    },
    community() {
      return this.$store.getters.getCommunity;
    },
    createdBy() {
      return this.community ? this.community.createdBy : null;
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
      this.$store.dispatch("updateCommunity", this.form);
    },
    isCurrentUser(userId) {
      return userId == this.$store.getters.getUser;
    },
    formattedDate(date) {
      const formatted = new Date(date);

      const dateString = `${formatted.getDay()}.${formatted.getMonth()}.${formatted.getFullYear()}.`;

      return dateString;
    },
    removeUserFromCommunity(userId) {
      this.$store.dispatch("removeUserFromCommunity", {
        user: Number(userId),
        community: Number(this.$route.params.communityId),
      });
    },
  },
};
</script>

<style>
</style>