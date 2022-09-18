import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./resources/auth/auth.store.js";
import posts from "./resources/posts/posts.store.js";
import comments from "./resources/comments/comments.store.js";
import communities from "./resources/communities/communities.store.js";

const store = new Vuex.Store({
  modules: {
    auth,
    posts,
    comments,
    communities,
  },
  state: {
    message: false,
    loading: false,
    view: false,
  },
  mutations: {
    setMessage(state, message) {
      state.message = {
        text: message.text,
        type: message.type,
      };
    },
    resetMessage(state) {
      state.message = null;
    },
    setView(state, view) {
      state.view = view;
    },
    resetView(state) {
      state.view = false;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    getMessage: (state) => state.message,
    getLoading: (state) => state.loading,
    getView: (state) => state.view,
  },
});

export default store;
