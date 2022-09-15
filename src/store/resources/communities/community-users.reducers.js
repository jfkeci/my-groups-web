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
    commit("setMessage", {
      text: i18n.t("errors.MYBnfe016"), // no community found
      type: "danger",
    });
  }
};

export const addUserToCommunity = async ({ commit }, data) => {
  try {
    const res = await axios.post(`/community-users`, data);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("User successfully removed from communtiy"),
        type: "danger",
      });
    } else {
      commit("setMessage", {
        text: i18n.t("Failed to add user to community"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("addUserToCommunity.ERR", err);
    commit("setMessage", {
      text: i18n.t("errors.MYBnfe016"), // no community found
      type: "danger",
    });
  }
  commit("setLoading", false);
};

export const removeUserFromCommunity = async ({ commit }, data) => {
  try {
    const res = await axios.delete(`/community-users`, data);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("User successfully removed from communtiy"),
        type: "danger",
      });
    } else {
      commit("setMessage", {
        text: i18n.t("Failed to add user to community"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("removeUserFromCommunity.ERR", err);
    commit("setMessage", {
      text: i18n.t("errors.MYBnfe016"), // no community found
      type: "danger",
    });
  }
  commit("setLoading", false);
};
