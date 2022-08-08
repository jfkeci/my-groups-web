import {
  fetchMemberCommunities,
  createCommunity,
} from "./communities.reducers";

export default {
  state: {
    memberCommunities: [],
  },
  mutations: {
    setMemberCommunities(state, memberCommunities) {
      state.memberCommunities = memberCommunities;
    },
  },
  actions: {
    createCommunity,
    fetchMemberCommunities,
  },
  getters: {
    getMemberCommunities: (state) => state.memberCommunities,
  },
};
