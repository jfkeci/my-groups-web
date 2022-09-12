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
    switch (err.response.status) {
      case 400:
        commit("setMessage", {
          text:
            i18n.$t(`errors.${err.response.data.message}`) ??
            err.response.data.message,
          type: "danger",
        });
        break;
      case 404:
        console.log(err.response);
        commit("setMessage", {
          text:
            i18n.$t(`errors.${err.response.data.message}`) ??
            err.response.data.message,
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
