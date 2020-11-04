import axios from 'axios';

const companyId = localStorage.getItem('company');
const token = localStorage.getItem('token');

export default {
  state: {
    items: [],
  },
  actions: {
    async getPrices({ commit }) {
      await axios
        .get(`/price/${companyId}`, {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          commit('getPrices', res.data);
        });
    },
  },
  mutations: {
    // eslint-disable-next-line no-param-reassign
    getPrices: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.items = data;
      // eslint-disable-next-line array-callback-return
      state.items.map((res) => { res.divider = true; });

      console.log(state.items);
    },
  },
};
