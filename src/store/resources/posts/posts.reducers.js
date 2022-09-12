import axios from "axios";
import { i18n } from "../../../i18n/i18n";

export const fetchUserCommunityPosts = async ({ commit }, userId) => {
  commit("setLoading", true);
  try {
    const res = await axios.get(`/user/${userId}/communities`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log(res.data);

      commit("setCommunityPosts", res.data);
    } else {
      commit("setCommunityPosts", []);

      commit("setMessage", {
        text: i18n.t("errors.MYBnfe016"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserCommunityPosts.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
  commit("setLoading", false);
};

export const fetchUserPostsForAllCommunities = async ({ commit }, userId) => {
  commit("setLoading", true);
  try {
    const res = await axios.get(`/user/${userId}/communities`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log(res.data);

      commit("setCommunityPosts", res.data);
    } else {
      commit("setCommunityPosts", []);

      commit("setMessage", {
        text: i18n.t("errors.MYBnfe016"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserPostsForAllCommunities.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
  commit("setLoading", false);
};

export const createCommunityPost = async ({ commit }, data) => {
  commit("setLoading", true);
  try {
    const res = await axios.post(`/posts`, data);

    if (res.status == 201 && res.data) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log("createCommunityPost.res.data", res.data);

      return res.data;
    } else {
      commit("setMessage", {
        text: i18n.t("failedToCreateCommunityPost"),
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserPostsForAllCommunities.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
  commit("setLoading", false);
};
