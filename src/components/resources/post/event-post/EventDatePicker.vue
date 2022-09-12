<template>
  <div class="ml-2 mr-2 pr-5 pl-5">
    <div class="mt-1 mb-3">
      <b-row>
        <b-col>
          <label for="choose-event-date-input">
            {{ $t("chooseEventDate") }}
          </label>

          <b-form-datepicker
            id="choose-event-date-input"
            v-model="date"
            size="sm"
          ></b-form-datepicker>
        </b-col>
        <b-col>
          <label for="choose-event-time-input">
            {{ $t("chooseEventTime") }}
          </label>

          <b-form-timepicker
            id="choose-event-time-input"
            v-model="time"
            size="sm"
          ></b-form-timepicker>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDatePicker",
  data() {
    return {
      date: new Date(),
      time: "12:00:00",
    };
  },
  watch: {
    date() {
      this.emitDateTime();
    },
    time() {
      this.emitDateTime();
    },
  },
  methods: {
    emitDateTime() {
      if (typeof this.date != "string") {
        this.$emit(
          "set-event-date",
          new Date(
            `${this.date.getDay()}.${this.date.getMonth()}.${this.date.getFullYear()}, ${
              this.time
            }`
          )
        );
      } else {
        const tempDate = new Date(this.date);

        this.$emit(
          "set-event-date",
          new Date(
            `${tempDate.getDay()}.${tempDate.getMonth()}.${tempDate.getFullYear()}, ${
              this.time
            }`
          )
        );
      }
    },
  },
  created() {
    this.$emit("set-event-date", this.date);
  },
};
</script>
