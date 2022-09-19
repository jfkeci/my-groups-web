<template>
  <div>
    <b-list-group v-if="postLikes.length">
      <b-list-group-item
        class="d-flex align-items-center"
        v-for="like in postLikes"
        :key="like.id"
      >
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">
          {{ `${like.users.firstName} ${like.users.lastName}` }}
        </span>
        <b-badge v-if="like.users.id == Number($store.getters.getUser)">{{
          $t("you")
        }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "LikedUsersList",
  props: {
    postLikes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>