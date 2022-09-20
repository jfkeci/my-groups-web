import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const fetchMemberCommunities = async (
  { commit, getters, dispatch },
  userId
) => {
  console.log("getters.getToken", getters.getToken);

  try {
    const res = await axios.get(`/user/${userId}/communities`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log(res.data);

      commit("setMemberCommunities", res.data);
    } else {
      commit("setMemberCommunities", []);

      commit("setMessage", {
        text: i18n.t("errors.MYBnfe016"), // no communities found
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchMemberCommunities.ERR", err);

    dispatch("handleError", err);
  }
  commit("setLoading", false);
};

export const createCommunity = async (
  { commit, dispatch, getters },
  community
) => {
  try {
    const res = await axios.post(`/communities`, community);

    if (res.status == 201 && res.data) {
      commit("setMessage", {
        text: i18n.t("communitySuccessfullyCreated"),
        type: "success",
      });

      await dispatch("fetchMemberCommunities", getters.getUser);

      commit("setView", `/dashboard/${res.data.id}`);
    } else {
      commit("setMessage", {
        text: i18n.t("errors.MYBnfe016"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("createCommunity.ERR", err);

    dispatch("handleError", err);
  }
  commit("setLoading", false);
};

export const fetchCommunity = async ({ commit, dispatch }, communityId) => {
  try {
    const res = await axios.get(`/communities/${communityId}`);

    if (res.status == 200 && res.data) {
      commit("setCommunity", res.data);
    } else {
      commit("setMessage", {
        text: i18n.t("noCommunityFound"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("community.reducers.fetchCommunity.ERR", err);

    dispatch("handleError", err);
  }
  commit("setLoading", false);
};

export const isUserCommunityAdmin = async ({ commit }, data) => {
  try {
    const res = await axios.post("/communities/check/is-community-admin", data);

    if (res.status == 200) {
      commit("setIsUserCommunityAdmin", res.data);
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log("isUserCommunityAdmin.err", err);

    return false;
  }
};

export const isUserCommunityMember = async ({ commit }, data) => {
  try {
    const res = await axios.post(
      "/communities/check/is-community-member",
      data
    );

    if (res.status == 200) {
      commit("setIsUserCommunityMember", res.data);
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log("isUserCommunityMember.err", err);

    return false;
  }
};

export const updateCommunity = async ({ commit, dispatch }, data) => {
  try {
    const res = await axios.patch(`/communities/${data.communityId}`, {
      user: data.userId,
      title: data.title,
      description: data.description,
    });

    if (res.status == 200) {
      commit("setView", `/update-community/${data.communityId}`);
      commit("setMessage", {
        text: i18n.t("successfullCommunityUpdate"),
        type: "success",
      });
    } else {
      commit("setMessage", {
        text: i18n.t("unsuccessfullCommunityUpdate"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("updateCommunity.err", err);

    dispatch("handleError", err);
  }
};
