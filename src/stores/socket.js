import * as io from 'socket.io-client';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

const store = new Vuex.Store({
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
          this.state.openedTransactions = res;
        })
        .on(`finishedTransactions:company:${companyId}`, (res) => {
          this.state.finishedTransactions = res;
        });
    },
  },
});

export default store;
