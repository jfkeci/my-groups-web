import axios from "axios";

export const registerUser = async ({ commit }, user) => {
  commit("setLoading", true);
  await axios
    .post(`/auth/register`, {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    })
    .then((res) => {
      commit("setUser", res.data);
      commit("setToken", res.data.token);
      commit("setMessage", {
        text: "Successfully logged in",
        type: "success",
      });
      commit("setLoading", false);
      commit("hideDialog");
    })
    .catch((err) => {
      commit("setLoading", false);
      switch (err.response.status) {
        case 400:
          commit("setMessage", {
            text: err.response.data.message,
            type: "error",
          });
          break;
        case 409:
          console.log(err);
          commit("setMessage", {
            text: err.response.data.message,
            type: "error",
          });
          break;
        default:
          commit("setMessage", {
            text: "Something went wrong",
            type: "error",
          });
          break;
      }
    });
};

export const loginUser = async ({ commit }, loginData) => {
  try {
    const res = await axios.post(`/auth/login`, loginData);

    if (res.status == 201 && res.data) {
      console.log("LOGGED IN");
      console.log(res);

      console.log(res.data.token);
      if (res.data.token) {
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
    switch (err.response.status) {
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 409:
        console.log(err);
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 404:
        console.log(err);
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
