<template>
  <div class="ml-5 mr-5 pr-5 pl-5">
    <div class="mt-2">
      <label for="choose-event-date-input">Choose event date</label>

      <b-form-datepicker
        size="sm"
        id="choose-event-date-input"
        v-model="date"
        class="mb-2"
      ></b-form-datepicker>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDatePicker",
  data() {
    return {
      date: new Date(),
    };
  },
  watch: {
    date() {
      this.$emit("set-event-date", this.date);
    },
  },
  created() {
    this.$emit("set-event-date", this.date);
  },
};
</script>
