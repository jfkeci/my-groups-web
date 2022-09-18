import { registerUser, loginUser } from "./auth.reducers.js";
import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export default {
  state: {
    isUserSuperAdmin: false,
    user: null,
    username: null,
    token: null,
  },
  mutations: {
    setToken(state, token) {
      console.log("setToken", token);

      state.token = token;

      token
        ? localStorage.setItem("token", token)
        : localStorage.removeItem("token");

      console.log("localStorage.getItem(token)", localStorage.getItem("token"));

      axios.defaults.headers.common = { authorization: `Bearer ${token}` };
    },
    setUser(state, user) {
      state.user = user;

      user
        ? localStorage.setItem("user", user)
        : localStorage.removeItem("user");
    },
    setIsUserSuperAdmin(state, isUserSuperAdmin) {
      state.isUserSuperAdmin = isUserSuperAdmin;
    },
    setUsername(state, username) {
      state.username = username;
    },
    logout({ state, commit }) {
      state.user = null;
      localStorage.removeItem("user");
      state.token = null;
      localStorage.removeItem("token");

      commit("setMessage", {
        text: i18n.t("userSuccessfullyLoggedOut"),
        type: "success",
      });
    },
    handleUnauthorised({ commit }) {
      commit("setMessage", {
        text: i18n.t("unauthorised"),
        type: "danger",
      });
      commit("setLoading", false);
      commit("setView", "/login");
    },
  },
  actions: {
    registerUser,
    loginUser,
  },
  getters: {
    getUser: (state) => state.user,
    getUsername: (state) => state.username,
    isUserSuperAdmin: (state) => state.isUserSuperAdmin,
    getToken: (state) => state.token,
    getLoggedInState: (state) => {
      if (
        localStorage.getItem("token") == null ||
        !localStorage.getItem("token")
      ) {
        state.token == null;
      } else {
        state.token = localStorage.getItem("token");
        axios.defaults.headers.common = {
          authorization: `bearer ${state.token}`,
        };
      }

      if (
        localStorage.getItem("user") == null ||
        !localStorage.getItem("user")
      ) {
        state.user == null;
      } else {
        state.user = localStorage.getItem("user");
      }

      return state.token != null && state.token != false;
    },
  },
};
