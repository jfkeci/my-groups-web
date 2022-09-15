import axios from "axios";
import { i18n } from "../../../i18n/i18n";

export const fetchUserCommunityPosts = async ({ commit }, data) => {
  try {
    const res = await axios.get(
      `/user/${data.userId}/posts/${data.communityId}`
    );

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log("fetchUserCommunityPosts.res.data", res.data);

      commit("setPosts", res.data);
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
  try {
    const res = await axios.get(`/user/${userId}/posts`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      commit("setPosts", res.data);
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
  console.log("createCommunityPost.data", data);
  try {
    const res = await axios.post(`/posts`, data);

    if (res.status == 201 && res.data) {
      commit("setMessage", {
        text: i18n.t("communitiesSuccessfullyFetched"),
        type: "success",
      });

      console.log("createCommunityPost.res.data", res.data);

      commit("setView", `/dashboard/${data.community}`);
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
