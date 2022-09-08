<template>
  <div>
    <b-list-group>
      <b-list-group-item
        class="d-flex align-items-left"
        v-for="option in post.poll_options"
        :key="option.id"
      >
        <span class="mr-auto">
          {{ option.option }}
        </span>
        <b-badge
          id="show-btn"
          @click="$bvModal.show(`poll-votes-modal-${option.id ?? ''}`)"
          >{{
            option.poll_option_votes.some((v) => v.users.id == currentUser)
              ? `You and ${option.poll_option_votes.length - 1} user`
              : `${option.poll_option_votes.length} users`
          }}
        </b-badge>

        <b-modal
          v-if="option.poll_option_votes.length"
          :id="`poll-votes-modal-${option.id ?? ''}`"
          hide-footer
        >
          <template #modal-title> Users that voted </template>

          <PollVoteUsersList :poll_option_votes="option.poll_option_votes" />

          <b-button
            block
            class="mt-3"
            @click="$bvModal.hide(`poll-votes-modal-${option.id ?? ''}`)"
          >
            Close
          </b-button>
        </b-modal>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import PollVoteUsersList from "../../user/PollVoteUsersList.vue";
export default {
  name: "PollPostListItemStructure",
  components: {
    PollVoteUsersList,
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
};
</script>
