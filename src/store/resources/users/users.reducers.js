import { i18n } from "../../../i18n/i18n";
import axios from "axios";

export const getUser = async ({ commit }, userId) => {
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
    if (err.response.status > 299) {
      commit("setMessage", {
        text:
          i18n.t(`errors.${err.response.data.message}`) ??
          err.response.data.message ??
          i18n.t(`errors.default`),
        type: "danger",
      });
    }
  }
};
