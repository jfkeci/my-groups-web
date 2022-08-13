<template>
  <div
    v-if="communityListItem.title.toLowerCase().includes(text.toLowerCase())"
  >
    <!-- Shown if currently selected -->
    <b-list-group-item
      active
      v-if="active"
      :to="`/dashboard/${communityListItem.id}`"
    >
      {{ communityListItem.title }}
    </b-list-group-item>
    <!-- Shown if currently not selected -->
    <b-list-group-item
      v-if="!active"
      :to="`/dashboard/${communityListItem.id}`"
    >
      {{ communityListItem.title }}
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "CommunityListItem",
  data() {
    return { active: false };
  },
  props: {
    communityListItem: Object,
    text: String,
  },
  created() {
    this.$route.params.communityId == this.communityListItem.id
      ? (this.active = true)
      : (this.active = false);
  },
};
</script>

<style>
</style>