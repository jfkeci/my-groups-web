import axios from "axios";

export const fetchPostTypes = async ({ commit }) => {
  commit("setLoading", true);

  try {
    const res = await axios.get(`/post-types`);

    if (res.status == 200 && res.data.length) {
      commit("setPostTypes", res.data);
    } else {
      commit("setPostTypes", []);

      commit("setMessage", {
        text: "No post types found, please create a post type",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchPostTypes.ERR", err);
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
      case 401:
        //commit("handleUnauthorised");
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
