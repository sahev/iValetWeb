import * as io from 'socket.io-client';
import axios from 'axios';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  state: {
    openedTransactions: [],
    finishedTransactions: [],
    recents: [],
  },
  actions: {
    async getOpeneds({ commit }) {
      await axios
        .get(`transaction/opened/${companyId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          commit('setOpened', res.data);
        });
    },
    setIn({ commit }, data) {
      // state.recents.out.push(data);
      // console.log('data> ', data);
      commit('setIn', data);
    },
    setOut({ commit }, data) {
      // state.recents.out.push(data);
      // console.log('data> ', data);
      commit('setOut', data);
    },
  },
  mutations: {
    // eslint-disable-next-line no-param-reassign
    setIn: (state, setIn) => {
      state.recents.push({ divider: true, inset: true });
      state.recents.push(setIn);
    },
    // eslint-disable-next-line no-param-reassign
    setOut: (state, setOut) => {
      state.recents.push({ divider: true, inset: true });
      state.recents.push(setOut);
    },
    // eslint-disable-next-line no-param-reassign
    setOpened: (state, opened) => { state.openedTransactions = opened; },
    getVehicles(state) {
      const socket = io.connect('http://ragazzitech.caioragazzi.com:81/', {
        query: { token },
      });

      socket
        .on(`openedTransactions:company:${companyId}`, (res) => {
          // eslint-disable-next-line no-param-reassign
          state.openedTransactions = res;
          // state.recents.in.push(res[res.length - 1]);
          // console.log('open', res, res[res.length - 1]);
        })
        .on(`finishedTransactions:company:${companyId}`, (res) => {
          // eslint-disable-next-line no-param-reassign
          state.finishedTransactions = res;
          // console.log('fini', res, res[res.length - 1]);
          // state.recents.out.push(res[res.length - 1]);
        });
    },
  },

};
