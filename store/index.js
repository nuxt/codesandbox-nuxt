import axios from "axios";

export const state = () => ({
  authUser: { username: "admin", role: "admin" }
});

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user;
  }
};

export const getters = {
  authUser: state => {
    return state.authUser;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit("SET_USER", req.session.authUser);
    }
  },
  async login({ commit }, { username, role }) {
    try {
      const { data } = await axios.post("/api/login", { username, role });
      commit("SET_USER", data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Bad credentials");
      }
      throw error;
    }
  }
};
