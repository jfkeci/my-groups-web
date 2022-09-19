<template>
  <div v-if="event_users.length">
    <b-list-group v-for="event_user in event_users" :key="event_user.id">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"> </b-avatar>
        <span class="mr-auto">
          {{ `${event_user.users.firstName} ${event_user.users.lastName}` }}
        </span>
        <b-badge v-if="event_user.users.id == currentUser" variant="success">
          {{ $t("YOU") }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "EventUsersList",
  props: {
    event_users: {
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