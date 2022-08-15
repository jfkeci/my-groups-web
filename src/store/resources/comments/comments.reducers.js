import axios from "axios";

export const createPostComment = async ({ commit }, data) => {
  try {
    let newPostComment;

    const res = await axios.post(`/posts/${data.postId}/comments`, data.data);

    if (res.status == 200 && res.data) {
      newPostComment = res.data;
    } else {
      newPostComment = null;
    }

    return newPostComment;
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

export const getPostComment = async ({ commit }, params) => {
  try {
    let postComment;

    const res = await axios.get(
      `/posts/${params.postId}/comments/${params.commentId}`
    );

    if (res.status == 200 && res.data) {
      postComment = res.data;
    } else {
      postComment = null;
    }

    return postComment;
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

export const updatePostComment = async ({ commit }, data) => {
  try {
    let updatedPostComment;

    const res = await axios.patch(
      `/posts/${data.postId}/comments/${data.commentId}`,
      data.data
    );

    if (res.status == 200 && res.data) {
      updatedPostComment = res.data;
    } else {
      updatedPostComment = null;
    }

    return updatedPostComment;
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

export const deletePostComment = async ({ commit }, params) => {
  try {
    let deletedPost;

    const res = await axios.delete(
      `/posts/${params.postId}/comments/${params.commentId}`
    );

    if (res.status == 200 && res.data) {
      deletedPost = res.data;
    } else {
      deletedPost = null;
    }

    return deletedPost;
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
