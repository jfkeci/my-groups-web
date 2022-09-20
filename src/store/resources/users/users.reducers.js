import axios from "axios";

export const getUser = async ({ dispatch }, userId) => {
  try {
    let user;

    const res = await axios.get(`/user/${userId}`);

    if (res.status == 200 && res.data) {
      user = res.data;
    } else {
      user = null;
    }

    return user;
  } catch (err) {
    console.log("getUser.ERR", err);

    dispatch("handleError", err);
  }
};

export const getUserProfile = async ({ commit, dispatch }, data) => {
  let res;
  try {
    if (data.currentUser) {
      res = await axios.get(
        `/user/${data.user}?currentUser=${data.currentUser}`
      );
    } else {
      res = await axios.get(`/user/${data.user}`);
    }

    if (res.status == 200 && res.data) {
      commit("setProfile", res.data);
    } else {
      commit("setProfile", null);
    }
  } catch (err) {
    console.log("getUser.ERR", err);

    dispatch("handleError", err);
  }
};
