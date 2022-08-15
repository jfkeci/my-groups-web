<template>
  <div class="ml-5 mr-5 pr-5 pl-5">
    <b-form-checkbox
      id="add-event-date-checkbox"
      v-model="addDate"
      name="add-event-date-checkbox"
    >
      Add date
    </b-form-checkbox>

    <div class="mt-2" v-if="addDate">
      <label for="choose-event-date-input">Choose event date</label>

      <b-form-datepicker
        id="choose-event-date-input"
        v-model="eventDate"
        class="mb-2"
      ></b-form-datepicker>
    </div>

    <b-form-checkbox
      id="add-event-length-checkbox"
      v-model="addLength"
      name="add-event-length-checkbox"
    >
      Add event length
    </b-form-checkbox>

    <b-form-group
      label-for="set-event-length-input"
      id="set-event-length-input"
      label="Event length"
      v-if="addLength"
    >
      <b-form-input
        id="set-event-length-input"
        v-model="eventLength"
        type="number"
        placeholder="Event length"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-checkbox
      id="add-event-location-checkbox"
      v-model="addLocation"
      name="add-event-location-checkbox"
    >
      Add location
    </b-form-checkbox>

    <LocationPicker
      v-if="addLocation"
      class="mt-2 mb-2"
      @set-new-position="setLocation"
    />
  </div>
</template>

<script>
import LocationPicker from "../../../map/LocationPicker.vue";
export default {
  name: "CreateEventPostStructure",
  components: {
    LocationPicker,
  },
  data() {
    return {
      location: null,
      addLocation: false,
      addLength: true,
      addDate: true,
      eventDate: "",
      eventLength: 0,
      result: {
        location: null,
        date: null,
        length: null,
        users: [],
      },
    };
  },
  methods: {
    setLocation(location) {
      console.log("setLocation", location);
      this.location = location;
    },
  },
  watch: {
    location() {
      this.result["location"] = this.location;
      console.log(this.location);
      console.log(this.result);
    },
    eventDate() {
      this.result["date"] = this.eventDate;
      console.log(this.eventDate);
      console.log(this.result);
    },
    eventLength() {
      this.result["length"] = this.eventLength;
      console.log(this.eventLength);
      console.log(this.result);
    },
    result: {
      handler() {
        console.log(this.result);
        this.emit("set-event-data", this.result);
      },
      deep: true,
    },
  },
};
</script>
