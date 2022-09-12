<template>
  <div v-if="poll_option_votes.length">
    <b-list-group v-for="vote in poll_option_votes" :key="vote.id">
      <b-list-group-item
        class="d-flex align-items-center"
        :to="`/user/${vote.users.id}`"
      >
        <b-avatar class="mr-3" :to="`/user/${vote.users.id}`"> </b-avatar>
        <span class="mr-auto" :to="`/user/${vote.users.id}`">
          {{ `${vote.users.firstName} ${vote.users.lastName}` }}
        </span>
        <b-badge v-if="vote.users.id == currentUser">
          {{ $t("YOU") }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "PollVoteUsersList",
  props: {
    poll_option_votes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style>
</style>