import axios from 'axios';
import decode from 'jwt-decode';

export default {
  state: {
    items: [],
  },
  actions: {
    async teste({ commit }) {
      const token = localStorage.getItem('token');
      const { id } = decode(token);
      // commit('setProfile');
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
    setProfile: (state, data) => { state.items = data; },
  },
};
