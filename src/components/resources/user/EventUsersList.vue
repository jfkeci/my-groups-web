<template>
  <div v-if="event_users.length">
    <b-list-group v-for="event_user in event_users" :key="event_user.id">
      <b-list-group-item
        class="d-flex align-items-center"
        :to="`/user/${event_user.users.id}`"
      >
        <b-avatar class="mr-3" :to="`/user/${event_user.users.id}`"> </b-avatar>
        <span class="mr-auto" :to="`/user/${event_user.users.id}`">
          {{ `${event_user.users.firstName} ${event_user.users.lastName}` }}
        </span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "PollVoteUsersList",
  props: {
    event_users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>