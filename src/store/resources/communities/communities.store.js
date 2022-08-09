import {
  fetchMemberCommunities,
  createCommunity,
  fetchCommunity,
} from "./communities.reducers";

export default {
  state: {
    community: null,
    memberCommunities: [],
  },
  mutations: {
    setMemberCommunities(state, memberCommunities) {
      state.memberCommunities = memberCommunities;
    },
    setCommunity(state, community) {
      state.community = community;
    },
  },
  actions: {
    fetchCommunity,
    createCommunity,
    fetchMemberCommunities,
  },
  getters: {
    getMemberCommunities: (state) => state.memberCommunities,
    getCommunity: (state) => state.community,
  },
};
