export default {
  state: {
    items: [],
    statusButton: false,
  },
  actions: {
    setPrice({ commit }, data) {
      // eslint-disable-next-line no-param-reassign
      commit('setPrice', data);
    },
    setButton({ commit }, data) {
      // eslint-disable-next-line no-param-reassign
      commit('setButton', data);
    },
  },
  mutations: {
    setPrice: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.items = data;
      console.log(state.items);
    },
    setButton: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.statusButton = data;
    },
  },
};
