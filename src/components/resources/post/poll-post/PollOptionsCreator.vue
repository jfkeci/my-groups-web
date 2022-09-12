<template>
  <div>
    <b-form-group
      class="ml-5 mr-5 mt-2"
      id="poll-structure-input-group-1"
      :label="$t('pollOptions')"
      label-for="poll-structure-input-1"
    >
      <b-button
        v-if="options.length < 9"
        @click="addOption"
        variant="primary"
        class="mt-1"
        size="sm"
        block
      >
        {{ $t("addOption") }}
      </b-button>
      <b-row v-for="option in options" :key="option.id" class="mt-2 mb-2 mr-5">
        <b-col>
          <b-form-input
            :id="`poll-structure-input-${option.id}`"
            v-model="option.title"
            :placeholder="$t('description')"
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
            {{ $t("removeOption") }}
          </b-tooltip>
        </b-col>
      </b-row>

      <b-alert
        v-if="!areOptionsValid"
        variant="danger"
        class="mt-2"
        size="sm"
        show
      >
        {{ $t("writeSomethingForAllOptions") }}
      </b-alert>

      <b-alert
        v-if="!areOptionsUnique"
        variant="danger"
        class="mt-2"
        size="sm"
        show
      >
        {{ $t("allOptionsMustBeUnique") }}
      </b-alert>

      <b-card class="mt-3" header="Form Data Result" v-if="$dbg">
        <pre class="m-0">{{ options }}</pre>
      </b-card>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "PollOptionsCreator",
  data() {
    return {
      options: [
        {
          id: 1,
          title: "",
        },
        {
          id: 2,
          title: "",
        },
      ],
      areOptionsUnique: false,
      areOptionsValid: false,
    };
  },
  methods: {
    addOption() {
      this.options.push({
        id: this.options.length + 1,
        title: "",
      });
    },
    removeOption(id) {
      if (this.hasTwoOptions) {
        this.options = this.options.filter((o) => o.id != id);
      }
    },
    isUnique(arr) {
      var tmpArr = [];
      for (var obj in arr) {
        if (tmpArr.indexOf(arr[obj]["title"]) < 0) {
          tmpArr.push(arr[obj]["title"]);
        } else {
          return false;
        }
      }
      return true;
    },
  },
  computed: {
    hasTwoOptions() {
      return this.options.length > 2;
    },
    haveUniqueTitles() {
      return this.isUnique(this.options);
    },
  },
  watch: {
    options: {
      handler: function () {
        this.areOptionsUnique = this.isUnique(this.options);
        this.areOptionsValid = !this.options.some((o) => !o.title.length);

        this.$emit(
          "are-options-valid",
          this.areOptionsValid && this.areOptionsUnique
        );

        if (this.areOptionsValid && this.areOptionsUnique) {
          this.$emit("set-option-values", {
            options: this.options,
          });
        } else {
          this.$emit("set-option-values", null);
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>