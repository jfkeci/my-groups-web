<template>
  <div>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-3"></b-avatar>
      <span class="mr-auto">
        <b>{{ `${comment.users.firstName} ${comment.users.lastName}` }}</b>
        <p>{{ comment.text }}</p>
        <small>{{ formattedDate(comment.createdAt) }}</small>
      </span>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "PostCommentsListItem",
  props: {
    comment: {
      type: Object,
      required: true,
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