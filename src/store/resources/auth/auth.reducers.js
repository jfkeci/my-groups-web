import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const registerUser = async ({ commit }, user) => {
  commit("setLoading", true);

  try {
    const res = await axios.post(`/auth/register`, user);

    if (res.status == 201 && res.data) {
      if (res.data.id) {
        commit("setUser", res.data.id);
        commit("setToken", res.data.token);
        commit("setIsAdmin", res.data.isAdmin);
        commit("setUsername", res.data.username);
        commit("setMessage", {
          text: i18n.t("userSuccessfullyRegistered"),
          type: "success",
        });
        commit("setView", "/dashboard");
      }
    } else {
      commit("setMessage", {
        text: i18n.t("errors.default"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("registerUser.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
  commit("setLoading", false);
};

export const loginUser = async ({ commit }, loginData) => {
  console.log("loginData", loginData);
  commit("setLoading", true);
  try {
    const res = await axios.post(`/auth/login`, loginData);

    if (res.status == 200 && res.data) {
      if (res.data.token) {
        commit("setUser", res.data.id);
        commit("setToken", res.data.token);
        commit("setIsAdmin", res.data.isAdmin);
        commit("setUsername", res.data.username);
        commit("setMessage", {
          text: i18n.t(`userSuccessfullyLoggedIn`),
          type: "success",
        });
        console.log("SETTING VIEW");
        commit("setView", "/dashboard");
      } else {
        commit("setMessage", {
          text: i18n.t("errors.default"),
          type: "danger",
        });
      }
    }
  } catch (err) {
    console.log("loginUser.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
  commit("setLoading", false);
};
