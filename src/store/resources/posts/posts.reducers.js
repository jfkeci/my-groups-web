import axios from "axios";

export const getUserCommunityPosts = async ({ commit }, userId) => {
  commit("setLoading", true);
  try {
    const res = await axios.get(`/user/${userId}/communities`);
    console.log("res", res);
    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: "Communities successfully fetched",
        type: "success",
      });

      console.log(res.data);

      commit("setMemberCommunities", res.data);
    } else {
      commit("setMemberCommunities", []);

      commit("setMessage", {
        text: "No communities found, please create a new community",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("ERR", err);
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

export const getUserPostsForAllCommunities = async ({ commit }, userId) => {
  commit("setLoading", true);
  try {
    const res = await axios.get(`/user/${userId}/communities`);
    console.log("res", res);
    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: "Communities successfully fetched",
        type: "success",
      });

      console.log(res.data);

      commit("setMemberCommunities", res.data);
    } else {
      commit("setMemberCommunities", []);

      commit("setMessage", {
        text: "No communities found, please create a new community",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("ERR", err);
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
