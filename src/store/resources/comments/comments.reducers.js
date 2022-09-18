import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const createPostComment = async ({ commit }, data) => {
  try {
    const res = await axios.post(`/comments/${data.post}`, {
      ...data,
    });

    if (res.status == 200) {
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
    const res = await axios.patch(
      `/comments/${data.post}/comment/${data.comment}`,
      data
    );

    if (res.status == 200) {
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

export const deletePostComment = async ({ commit }, params) => {
  try {
    let deletedPost;

    const res = await axios.delete(
      `/comments/${params.post}/comment/${params.comment}`,
      { community: params.community }
    );

    if (res.status == 200) {
      commit("setPosts", res.data);
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

    if (res.status == 200) {
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

    if (res.status == 200) {
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

export const isUserCommentOwner = async (data) => {
  try {
    const res = await axios.post(`/comments/check/is-user-comment-owner`, data);

    return res.data;
  } catch (err) {
    console.log("getPostComments.ERR", err);
  }
};
