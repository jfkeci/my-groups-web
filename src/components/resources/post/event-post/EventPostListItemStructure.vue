<template>
  <div>
    <b-form-datepicker
      id="choose-event-date-input-disabled"
      :value="post.date"
      class="mb-3"
      size="sm"
      disabled
    ></b-form-datepicker>

    <b-list-group>
      <b-list-group-item class="d-flex align-items-left">
        <b-button
          id="show-btn"
          :variant="
            post.event_users.some((eu) => eu.users.id == currentUser)
              ? `primary`
              : `warning`
          "
          @click="$bvModal.show(`event-users-modal-${post.id ?? ''}`)"
        >
          <b>
            {{ post.event_users.length }}
            <span>
              {{ post.event_users.length == 1 ? $t("user") : $t("users") }}
            </span>
          </b>
        </b-button>

        <b-button
          class="ml-3 mr-3"
          :variant="
            post.event_users.some((eu) => eu.users.id == currentUser)
              ? `danger`
              : `success`
          "
          @click="toggleEventUser(post.id)"
        >
          Dolazim
        </b-button>

        <b-modal
          v-if="post.event_users.length"
          :id="`event-users-modal-${post.id ?? ''}`"
          hide-footer
        >
          <template #modal-title>
            {{ $t("usersCommingToEvent") }}
          </template>

          <EventUsersList :event_users="post.event_users" />

          <b-button
            block
            class="mt-3"
            @click="$bvModal.hide(`event-users-modal-${post.id ?? ''}`)"
          >
            {{ $t("close") }}
          </b-button>
        </b-modal>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import EventUsersList from "../../user/EventUsersList.vue";

export default {
  name: "EventPostListItemStructure",
  components: {
    EventUsersList,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    toggleEventUser(postId) {
      this.$store.dispatch("toggleEventUser", {
        user: Number(this.$store.getters.getUser),
        event: Number(postId),
      });
    },
  },
};
</script>
