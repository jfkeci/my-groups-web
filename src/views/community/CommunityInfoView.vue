<template>
  <div v-if="community" class="mt-2">
    <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      :title="community.title"
      img-alt="Image"
      tag="article"
      img-top
      class="mb-2"
    >
      <b-card-text>
        {{ community.description }}
      </b-card-text>

      <!-- COMMUNITY MEMBERS -->
      <b-card class="mt-3" :title="`${community.title} members`">
        <b-list-group v-if="community.community_members.length">
          <b-list-group-item
            class="d-flex align-items-center"
            v-for="member in community.community_members"
            :key="member.id"
          >
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">{{
              `${member.users.firstName} ${member.users.lastName}`
            }}</span>
            <b-badge>
              {{ `${$t("since")}: ${formattedDate(member.createdAt)}` }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <!-- COMMUNITY ADMINS -->
      <b-card class="mt-3" :title="`${community.title} admins`">
        <b-list-group v-if="community.community_admins.length">
          <b-list-group-item
            class="d-flex align-items-center"
            v-for="admin in community.community_admins"
            :key="admin.id"
          >
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">{{
              `${admin.users.firstName} ${admin.users.firstName}`
            }}</span>
            <b-badge>
              {{ `${$t("since")}: ${formattedDate(admin.createdAt)}` }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CommunityInfoView",
  async created() {
    if (!this.$route.params.communityId) {
      this.$store.commit("setView", "/dashboard");
    }

    await this.$store.dispatch("isUserCommunityMember", {
      user: Number(this.$store.getters.getUser),
      community: Number(this.$route.params.communityId),
    });

    await this.$store.dispatch(
      "fetchCommunity",
      Number(this.$route.params.communityId)
    );
  },
  computed: {
    isUserCommunityMember() {
      return this.$store.getters.getIsUserCommunityMember;
    },
    community() {
      return this.$store.getters.getCommunity;
    },
  },
  watch: {
    isUserCommunityMember() {
      if (!this.isUserCommunityMember) {
        this.$store.commit("setView", "/dashboard");
      }
    },
  },
  methods: {
    formattedDate(date) {
      const formatted = new Date(date);

      const dateString = `${formatted.getDay()}.${formatted.getMonth()}.${formatted.getFullYear()}.`;

      return dateString;
    },
  },
};
</script>

<style>
</style>