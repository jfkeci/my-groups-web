import { registerUser, loginUser } from "./auth.reducers.js";
import axios from "axios";

export default {
  state: {
    user: null,
    token: null,
  },
  mutations: {
    async setToken(state, token) {
      state.token = token;

      token
        ? localStorage.setItem("token", token)
        : localStorage.removeItem("token");

      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    },
    logout({ state, commit }) {
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
