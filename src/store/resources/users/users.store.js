import { getUserProfile } from "./users.reducers.js";

export default {
  state: {
    profile: null,
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    getUserProfile,
  },
  getters: {
    getProfile: (state) => state.profile,
  },
};
