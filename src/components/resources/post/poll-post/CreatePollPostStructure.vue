<template>
  <div>
    <b-alert class="mt-2" variant="danger" show v-if="!areOptionsValid">
      Write something for all options
    </b-alert>

    <b-form-group
      class="ml-5 mr-5 mt-2"
      id="poll-structure-input-group-1"
      label="Poll options"
      label-for="poll-structure-input-1"
    >
      <b-row
        v-for="option in options"
        :key="option.id"
        class="mt-2 mb-2 ml-5 mr-5"
      >
        <b-col>
          <b-form-input
            :id="`poll-structure-input-${option.id}`"
            v-model="option.title"
            placeholder="Description"
            size="sm"
            required
          ></b-form-input>
        </b-col>
        <b-col cols="1">
          <b-button
            :id="`button-remove-option-${option.id}`"
            @click="removeOption(option.id)"
            v-if="hasTwoOptions"
            variant="danger"
            size="sm"
          >
            <b-icon icon="x"></b-icon>
          </b-button>

          <b-tooltip
            :target="`button-remove-option-${option.id}`"
            v-if="hasTwoOptions"
            triggers="hover"
          >
            Remove option
          </b-tooltip>
        </b-col>
      </b-row>

      <b-button
        class="mt-1 ml-5 mr-5"
        @click="addOption"
        size="sm"
        variant="primary"
        block
      >
        Add option
      </b-button>
      <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
        <pre class="m-0">{{ options }}</pre>
      </b-card>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "CreatePollPostStructure",
  data() {
    return {
      options: [
        {
          id: 1,
          title: "",
          votes: 0,
        },
        {
          id: 2,
          title: "",
          votes: 0,
        },
      ],
    };
  },
  methods: {
    addOption() {
      this.options.push({
        id: this.options.length + 1,
        title: "",
        votes: 0,
      });
    },
    removeOption(id) {
      if (this.hasTwoOptions) {
        this.options = this.options.filter((o) => o.id != id);
      }
    },
  },
  computed: {
    areOptionsValid() {
      return !this.options.some((o) => !o.title.length);
    },
    hasTwoOptions() {
      return this.options.length > 2;
    },
  },
  watch: {
    areOptionsValid() {
      this.$emit("are-options-valid", this.areOptionsValid);

      if (!this.areOptionsValid) {
        this.$emit("option-values", {
          options: this.options,
          votes: [],
        });
      } else {
        this.$emit("option-values", null);
      }
    },
  },
};
</script>

<style>
</style>