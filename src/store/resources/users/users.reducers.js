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
