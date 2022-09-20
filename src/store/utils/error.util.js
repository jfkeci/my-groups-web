import { i18n } from "@/i18n/i18n";

export const handleError = async ({ commit }, err) => {
  if (err.response.status == 403) {
    commit("setMessage", {
      text:
        i18n.t(`errors.${err.response.data.message}`) ??
        err.response.data.message,
      type: "danger",
    });

    commit("logout");
  }

  if (err.response.status > 299) {
    commit("setMessage", {
      text:
        i18n.t(`errors.${err.response.data.message}`) ??
        err.response.data.message,
      type: "danger",
    });
  }
};
