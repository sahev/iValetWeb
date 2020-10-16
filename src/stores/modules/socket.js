import * as io from 'socket.io-client';
import axios from 'axios';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  state: {
    openedTransactions: [],
    finishedTransactions: [],
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
  },
  mutations: {
    // eslint-disable-next-line no-param-reassign
    setOpened: (state, opened) => { state.openedTransactions = opened; },
    getVehicles() {
      const socket = io.connect('http://ragazzitech.caioragazzi.com:81/', {
        query: { token },
      });

      socket
        .on(`openedTransactions:company:${companyId}`, (res) => {
          // eslint-disable-next-line no-undef
          this.state.openedTransactions = res;
          console.log(res);
        })
        .on(`finishedTransactions:company:${companyId}`, (res) => {
          this.state.finishedTransactions = res;
        });
    },
  },
};
