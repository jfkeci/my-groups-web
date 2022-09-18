<template>
  <div>
    <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-3"></b-avatar>
      <span class="mr-auto">
        <b>{{ `${comment.users.firstName} ${comment.users.lastName}` }}</b>

        <p v-if="!editing">{{ comment.text }}</p>

        <b-input-group class="mt-3" v-if="editing">
          <template #append>
            <b-input-group-text>
              <b-button size="sm" variant="success" @click="updateComment()">
                Update
              </b-button>
            </b-input-group-text>
          </template>
          <b-form-textarea
            :id="`update-comment-textarea-${comment.id}`"
            :placeholder="$t('Description')"
            v-model="newCommentText"
            rows="3"
          ></b-form-textarea>
        </b-input-group>

        <small>{{ formattedDate(comment.createdAt) }}</small>
      </span>
      <div>
        <ConfirmationModal
          title="Are you sure you want to delete this comment?"
          :id="`delete-${comment.id}`"
          action="deletePostComment"
          :confirmText="$t('delete')"
          :buttonVariant="`danger`"
          :data="{
            post: comment.post,
            comment: comment.id,
            community: Number($route.params.communityId) ?? null,
          }"
          icon="trash-fill"
          v-if="isUserCommentOwner"
        />

        <b-button
          size="sm"
          class="mr-2"
          variant="primary"
          v-if="isUserCommentOwner"
          @click="editing = !editing"
        >
          <b-icon icon="pen" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
import { isUserCommentOwner } from "../../../../store/resources/comments/comments.reducers.js";
import ConfirmationModal from "../../../modals/ConfirmationModal.vue";

export default {
  name: "PostCommentsListItem",
  components: {
    ConfirmationModal,
  },
  data() {
    return {
      isUserCommentOwner: false,
      editing: false,
      newCommentText: "",
    };
  },
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
    async updateComment() {
      await this.$store.dispatch("updatePostComment", {
        community: Number(this.$route.params.communityId) ?? null,
        comment: this.comment.id,
        text: this.newCommentText,
        post: this.comment.post,
      });

      this.editing = false;
    },
    async deleteComment() {
      await this.$store.dispatch("deletePostComment", {
        post: this.comment.post,
        comment: this.comment.id,
        community: Number(this.$route.params.communityId) ?? null,
      });
    },
  },
  async mounted() {
    const createdBy = Number(this.$store.getters.getUser);

    console.log(`created.createdBy`, createdBy);

    this.isUserCommentOwner = await isUserCommentOwner({
      id: Number(this.comment.id),
      createdBy,
    });

    this.newCommentText = this.comment.text;
  },
  watch: {
    comment: {
      handler: function () {
        this.newCommentText = this.comment.text;
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>