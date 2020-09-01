export const state = () => ({
  name: "",
  email: "",
  phone: {
    country: {
      selected: ""
    },
    number: ""
  },
  message: {
    selected: 0,
    value: ""
  }
});

export const getters = {};

export const actions = {};

export const mutations = {
  setFormData(state, prop) {
    Object.assign(state, prop);
  }
};
