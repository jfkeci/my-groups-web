import axios from "axios";

export const registerUser = async ({ commit }, user) => {
  commit("setLoading", true);
  try {
    const res = await axios.post(`/auth/register`, user);

    if (res.status == 201 && res.data) {
      if (res.data.id) {
        commit("setUser", res.data.id);
        commit("setToken", res.data.token);
        commit("setMessage", {
          text: "User successfully registered",
          type: "success",
        });
        commit("setView", "/dashboard");
      }
    } else {
      commit("setMessage", {
        text: "Something went wrong",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("ERR", err);
    switch (err.response.status) {
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 409:
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
  commit("setLoading", false);
};

export const loginUser = async ({ commit }, loginData) => {
  commit("setLoading", true);
  try {
    const res = await axios.post(`/auth/login`, loginData);

    if (res.status == 201 && res.data) {
      if (res.data.token) {
        commit("setUser", res.data.id);
        commit("setToken", res.data.token);
        commit("setMessage", {
          text: "Successfully logged in",
          type: "success",
        });
        commit("setView", "/dashboard");
      } else {
        commit("setMessage", {
          text: "Something went wrong",
          type: "danger",
        });
      }
    }
  } catch (err) {
    console.log(err);
    switch (err.response.status) {
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 409:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 404:
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
  commit("setLoading", false);
};
