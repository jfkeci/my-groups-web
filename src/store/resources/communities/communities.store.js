import {
  addUserToCommunity,
  fetchCommunityUsers,
  removeUserFromCommunity,
} from "./community-users.reducers";
import {
  fetchCommunity,
  updateCommunity,
  createCommunity,
  isUserCommunityAdmin,
  isUserCommunityMember,
  fetchMemberCommunities,
} from "./communities.reducers";

export default {
  state: {
    isUserCommunityMember: false,
    isUserCommunityAdmin: false,
    memberCommunities: [],
    communityUsers: [],
    community: null,
  },
  mutations: {
    setIsUserCommunityAdmin(state, isUserCommunityAdmin) {
      state.isUserCommunityAdmin = isUserCommunityAdmin;
    },
    setIsUserCommunityMember(state, isUserCommunityMember) {
      state.isUserCommunityMember = isUserCommunityMember;
    },
    setMemberCommunities(state, memberCommunities) {
      state.memberCommunities = memberCommunities;
    },
    setCommunityUsers(state, communityUsers) {
      state.communityUsers = communityUsers;
    },
    setCommunity(state, community) {
      state.community = community;
    },
  },
  actions: {
    // Community reducer methods
    fetchCommunity,
    updateCommunity,
    createCommunity,
    isUserCommunityAdmin,
    isUserCommunityMember,
    fetchMemberCommunities,
    // Community-users reducer methods
    removeUserFromCommunity,
    fetchCommunityUsers,
    addUserToCommunity,
  },
  getters: {
    getCommunity: (state) => state.community,
    getCommunityUsers: (state) => state.communityUsers,
    getMemberCommunities: (state) => state.memberCommunities,
    getIsUserCommunityAdmin: (state) => state.isUserCommunityAdmin,
    getIsUserCommunityMember: (state) => state.isUserCommunityMember,
  },
};
