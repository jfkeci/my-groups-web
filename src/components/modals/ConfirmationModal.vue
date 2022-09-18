<template>
  <div>
    <b-button
      size="sm"
      id="show-btn"
      class="mb-2"
      :variant="buttonVariant"
      @click="$bvModal.show(`confirmation-modal-${id ?? ''}`)"
    >
      <b-icon :icon="icon" aria-hidden="true"></b-icon>
      {{ buttonText }}
    </b-button>

    <b-modal :id="`confirmation-modal-${id ?? ''}`" hide-footer>
      <template #modal-title> {{ title }} </template>
      <b-button :variant="buttonVariant" @click="doAction" class="mt-3" block>
        {{ confirmText }}
      </b-button>
      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide(`confirmation-modal-${id ?? ''}`)"
      >
        {{ $t("close") }}
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ConfirmationModal",
  props: {
    id: { type: String, required: true },
    action: { type: String, required: true },
    postAction: { type: String, default: null },
    icon: { type: String, default: "" },
    buttonText: { type: String, default: "" },
    buttonVariant: { type: String, default: "primary" },
    confirmText: { type: String, default: "Ok" },
    title: { type: String, default: "" },
    type: { type: String, default: "primary" },
    data: { default: null },
    postActionData: { default: null },
  },
  methods: {
    async doAction() {
      if (this.data) {
        await this.$store.dispatch(this.action, this.data);
      } else {
        await this.$store.dispatch(this.action);
      }

      if (this.postAction) {
        if (this.postActionData) {
          await this.$store.commit(this.postAction, this.postActionData);
        } else {
          await this.$store.commit(this.postAction);
        }
      }

      this.$bvModal.hide(`confirmation-modal-${this.id ?? ""}`);
    },
  },
};
</script>

<style>
</style>