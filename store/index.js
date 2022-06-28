// @ts-check
export const state = () => {
  logged: false;
  token: null;
  user: null;
};

export const getters = {
  isLogged: (state) => state.logged,
  getToken: (state) => state.token,
  getUser: (state) => state.user
};

export const actions = {
  async fetchToken({ commit }) {
    const token = null;

    commit("SET_LOGGED", token);
  },
  async fetchUser({ commit }) {
    const user = null;

    commit("SET_TOKEN", user);
  },
  async fetchLogged({ commit }) {
    const login = false;

    commit("SET_USER", login);
  }
};

export const mutations = {
  SET_LOGGED: (state, login) => (state.logged = login),
  SET_TOKEN: (state, token) => (state.token = token),
  SET_USER: (state, user) => (state.user = user)
};
