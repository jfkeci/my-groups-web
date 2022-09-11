<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-content' slot -->
    <template #button-content>
      <em>{{ selected }}</em>
    </template>
    <b-dropdown-item @click="changeLanguage('hr')">HR</b-dropdown-item>
    <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "LanguageDropdown",
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "hr");
    }
  },
  methods: {
    changeLanguage(language) {
      localStorage.setItem("lang", language);
      window.location.reload();
    },
  },
  computed: {
    lang() {
      return localStorage.getItem("lang") ?? "hr";
    },
    selected() {
      if (this.lang == "hr") {
        return "Hr";
      } else if (this.lang == "en") {
        return "En";
      } else {
        return "N/A";
      }
    },
  },
};
</script>

<style>
</style>