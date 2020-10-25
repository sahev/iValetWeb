export default {
  state: {
    items: [],
  },
  actions: {
    setPrice({ commit }, data) {
      // eslint-disable-next-line no-param-reassign
      commit('setPrice', data);
    },
  },
  mutations: {
    setPrice: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.items = data;
    },
  },
};
