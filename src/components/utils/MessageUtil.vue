<template>
  <b-alert class="mt-1 mb-1" v-if="message" :variant="message.type" show>{{
    message.text
  }}</b-alert>
</template>

<script>
export default {
  name: "MessageUtil",
  computed: {
    message() {
      return this.$store.getters.getMessage;
    },
  },
};
</script>