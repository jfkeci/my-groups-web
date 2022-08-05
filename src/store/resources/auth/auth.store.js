import { registerUser, loginUser } from "./auth.reducers.js";
import axios from "axios";

export default {
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;

      token
        ? localStorage.setItem("token", token)
        : localStorage.removeItem("token");

      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    },
    setUser(state, user) {
      state.user = user;

      user
        ? localStorage.setItem("user", user)
        : localStorage.removeItem("user");
    },
    logout({ state, commit }) {
      state.user = null;
      localStorage.removeItem("user");
      state.token = null;
      localStorage.removeItem("token");

      commit("setMessage", {
        text: "Successfully logged out",
        type: "success",
      });
    },
  },
  actions: {
    registerUser,
    loginUser,
  },
  getters: {
    getUser: (state) => state.user,
    getLoggedInState: (state) => {
      if (
        localStorage.getItem("token") == null ||
        !localStorage.getItem("token")
      ) {
        state.token == null;
      } else {
        state.token = localStorage.getItem("token");
        axios.defaults.headers.common = {
          Authorization: `bearer ${state.token}`,
        };
      }

      return state.token != null && state.token != false;
    },
  },
};
