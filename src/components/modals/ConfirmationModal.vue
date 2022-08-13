<template>
  <div>
    <b-button
      size="sm"
      id="show-btn"
      :variant="type"
      @click="$bvModal.show(`confirmation-modal-${id ?? ''}`)"
    >
      <b-icon :icon="icon" aria-hidden="true"></b-icon> {{ iconText }}
    </b-button>

    <b-modal :id="`confirmation-modal-${id ?? ''}`" hide-footer>
      <template #modal-title> {{ title }} </template>
      <b-button class="mt-3" type="success" block @click="doAction">
        {{ confirmText }}
      </b-button>
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide(`confirmation-modal-${id ?? ''}`)"
      >
        Close
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "PostLikeModal",
  props: {
    id: { type: String, required: true },
    action: { type: String, required: true },
    postAction: { type: String, default: null },
    message: { type: String, default: "" },
    icon: { type: String, default: "" },
    iconText: { type: String, default: "" },
    confirmText: { type: String, default: "Ok" },
    title: { type: String, default: "" },
    type: { type: String, default: "primary" },
  },
  methods: {
    async doAction() {
      await this.$store.dispatch(this.action);

      if (this.postAction) {
        await this.$store.commit(this.postAction);
      }
    },
  },
};
</script>

<style>
</style>