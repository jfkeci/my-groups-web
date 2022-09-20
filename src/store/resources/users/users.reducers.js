import axios from "axios";

export const getUser = async ({ commit, dispatch }, userId) => {
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
