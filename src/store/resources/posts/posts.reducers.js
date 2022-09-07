import axios from "axios";

export const fetchUserCommunityPosts = async ({ commit }, userId) => {
  commit("setLoading", true);
  try {
    const res = await axios.get(`/user/${userId}/communities`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: "Community posts successfully fetched",
        type: "success",
      });

      console.log(res.data);

      commit("setCommunityPosts", res.data);
    } else {
      commit("setCommunityPosts", []);

      commit("setMessage", {
        text: "No community posts found, please create a new community post",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserCommunityPosts.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      default:
        commit("setMessage", {
          text: "Something went wrong",
          type: "danger",
        });
        break;
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
        text: "Community posts successfully fetched",
        type: "success",
      });

      console.log(res.data);

      commit("setCommunityPosts", res.data);
    } else {
      commit("setCommunityPosts", []);

      commit("setMessage", {
        text: "No community posts found, please create a new community post",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserPostsForAllCommunities.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      default:
        commit("setMessage", {
          text: "Something went wrong",
          type: "danger",
        });
        break;
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
        text: "Community posts successfully fetched",
        type: "success",
      });

      console.log("createCommunityPost.res.data", res.data);

      return res.data;
    } else {
      commit("setMessage", {
        text: "Failed to create community post",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchUserPostsForAllCommunities.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      default:
        commit("setMessage", {
          text: "Something went wrong",
          type: "danger",
        });
        break;
    }
  }
  commit("setLoading", false);
};
