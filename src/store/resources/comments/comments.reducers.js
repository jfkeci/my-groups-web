import axios from "axios";

export const getPostComments = async ({ commit }, postId) => {
  try {
    let postWithComments;

    const res = await axios.get(`/posts/${postId}/comments`);

    if (res.status == 200 && res.data) {
      postWithComments = res.data;
    } else {
      postWithComments = null;
    }

    return postWithComments;
  } catch (err) {
    console.log("getPostComments.ERR", err);
    switch (err.response.status) {
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 404:
        console.log(err.response);
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
};
