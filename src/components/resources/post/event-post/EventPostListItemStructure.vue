<template>
  <div>
    <p class="m-3" v-if="$dbg">dbg ID:{{ post.id }}</p>
    <b-form-datepicker
      id="choose-event-date-input-disabled"
      :value="post.date"
      class="mb-3"
      size="sm"
      disabled
    ></b-form-datepicker>

    <b-list-group>
      <b-list-group-item
        class="d-flex align-items-left"
        @click="$bvModal.show(`event-users-modal-${post.id ?? ''}`)"
      >
        <b-badge
          id="show-btn"
          @click="$bvModal.show(`event-users-modal-${post.id ?? ''}`)"
        >
          {{ post.event_users.length }}
        </b-badge>

        <span
          @click="$bvModal.show(`event-users-modal-${post.id ?? ''}`)"
          class="ml-2"
        >
          {{
            post.event_users.length > 1
              ? "Users comming to the event"
              : "User comming to the event"
          }}
        </span>

        <b-modal
          v-if="post.event_users.length"
          :id="`event-users-modal-${post.id ?? ''}`"
          hide-footer
        >
          <template #modal-title> Users comming to the event </template>

          <EventUsersList :event_users="post.event_users" />

          <b-button
            block
            class="mt-3"
            @click="$bvModal.hide(`event-users-modal-${post.id ?? ''}`)"
          >
            Close
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
};
</script>
