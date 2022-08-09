import axios from "axios";

export const fetchMemberCommunities = async ({ commit, getters }, userId) => {
  commit("setLoading", true);

  console.log("getters.getToken", getters.getToken);

  try {
    const res = await axios.get(`/user/${userId}/communities`);

    if (res.status == 200 && res.data.length) {
      commit("setMessage", {
        text: "Communities successfully fetched",
        type: "success",
      });

      console.log(res.data);

      commit("setMemberCommunities", res.data);
    } else {
      commit("setMemberCommunities", []);

      commit("setMessage", {
        text: "No communities found, please create a new community",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchMemberCommunities.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 401:
        //commit("handleUnauthorised");
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

export const createCommunity = async (
  { commit, dispatch, getters },
  community
) => {
  commit("setLoading", true);

  try {
    const res = await axios.post(`/communities`, community);

    if (res.status == 201 && res.data) {
      commit("setMessage", {
        text: "Community successfully created",
        type: "success",
      });

      await dispatch("fetchMemberCommunities", getters.getUser);

      commit("setView", `/dashboard/${res.data.id}`);
    } else {
      commit("setMessage", {
        text: "No communities found, please create a new community",
        type: "danger",
      });
    }
  } catch (err) {
    console.log("createCommunity.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
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

export const fetchCommunity = async ({ commit }, communityId) => {
  commit("setLoading", true);

  try {
    const res = await axios.get(`/communities/${communityId}`);

    if (res.status == 200 && res.data) {
      commit("setCommunity", res.data);
    } else {
      commit("setMessage", {
        text: `No community found for ${communityId}`,
        type: "danger",
      });
    }
  } catch (err) {
    console.log("fetchCommunity.ERR", err);
    switch (err.response.status) {
      case 404:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 400:
        commit("setMessage", {
          text: err.response.data.message,
          type: "danger",
        });
        break;
      case 401:
        commit("handleUnauthorised");
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
