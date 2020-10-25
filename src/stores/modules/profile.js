import axios from 'axios';
import decode from 'jwt-decode';

const companyId = localStorage.getItem('company');
const token = localStorage.getItem('token');

export default {
  state: {
    items: [],
  },
  actions: {
    async getProfile({ commit }) {
      const { id } = decode(token);
      await axios
        .get(`/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          commit('setProfile', res.data);
        });
    },
  },
  mutations: {
    // eslint-disable-next-line no-param-reassign
    setProfile: (state, data) => {
      // eslint-disable-next-line no-param-reassign
      state.items = data;
      // eslint-disable-next-line no-param-reassign
      state.items.companyId = companyId;
      // eslint-disable-next-line no-param-reassign
      state.items.token = token;
    },
  },
};
