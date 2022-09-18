import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const createPostComment = async ({ commit }, data) => {
  try {
    const res = await axios.post(`/comments/${data.post}`, {
      ...data,
    });

    if (res.status == 200 && res.data) {
      commit("setPosts", res.data);
    }
  } catch (err) {
    console.log("getPostComments.ERR", err);
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
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
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
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
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
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
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
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
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message,
        type: "danger",
      });
    }
  }
};
