import * as io from 'socket.io-client';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  state: {
    openedTransactions: [],
    finishedTransactions: [],
    teste: 0,
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
    countt() {
      console.log('asntes', this.state.teste);
      this.state.teste += 1;
      console.log(this.state.teste);
    },
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
          // console.log('socket IN', this.state.openedTransactions);
        })
        .on(`finishedTransactions:company:${companyId}`, (res) => {
          this.state.finishedTransactions = res;
          // console.log('socket FINISH', this.state.finishedTransactions);
        });
    },
  },

};
