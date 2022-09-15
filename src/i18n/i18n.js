import hr from "./lang/hr.json";
import en from "./lang/en.json";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage.getItem("lang") ?? "hr",
  messages: {
    en: en,
    hr: hr,
  },
});
