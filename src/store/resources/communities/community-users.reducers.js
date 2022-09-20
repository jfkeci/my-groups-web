import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const fetchCommunityUsers = async ({ commit }, communityId) => {
  try {
    const res = await axios.get(`/community-users/${communityId}`);

    if (res.status == 200 && res.data.length) {
      commit("setCommunityUsers", res.data);
    } else {
      commit("setCommunityUsers", []);

      commit("setMessage", {
        text: i18n.t("errors.MYBnfe016"), // no community found
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchCommunityUsers.ERR", err);

    commit("handleError", err);
  }
};

export const addUserToCommunity = async ({ commit }, data) => {
  try {
    const res = await axios.post(`/community-users`, data);

    if (res.status == 200) {
      commit("setCommunityUsers", res.data);
    } else {
      commit("setMessage", {
        text: i18n.t("Failed to add user to community"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("addUserToCommunity.ERR", err);

    commit("handleError", err);
  }
  commit("setLoading", false);
};

export const removeUserFromCommunity = async ({ commit }, data) => {
  console.log("removeUserFromCommunity.data", data);

  try {
    const res = await axios.post(`/community-users/delete`, data);

    if (res.status == 200) {
      commit("setCommunityUsers", res.data);
    } else {
      commit("setMessage", {
        text: i18n.t("Failed to remove user from communtiy"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("removeUserFromCommunity.ERR", err);

    commit("handleError", err);
  }
  commit("setLoading", false);
};
