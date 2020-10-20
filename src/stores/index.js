// import * as io from 'socket.io-client';
import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import profile from './modules/profile';
import socket from './modules/socket';
// import { socketMutations, socketActions } from './socket';

Vue.use(Vuex);
// const token = localStorage.getItem('token');
// // eslint-disable-next-line radix
// const companyId = parseInt(localStorage.getItem('company'));

const store = new Vuex.Store({
  modules: {
    profile,
    socket,
  },
  state: {
    // profile: 0,
    // openedTransactions: [],
    // finishedTransactions: [],
  },
  actions: {},

  mutations: {

  },
  // {
  // eslint-disable-next-line no-param-reassign
  // setProfile: (state) => { state.profile += 1; },
  // // eslint-disable-next-line no-param-reassign
  // setOpened: (state, opened) => { state.openedTransactions = opened; },
  // getVehicles() {
  //   const socket = io.connect('http://ragazzitech.caioragazzi.com:81/', {
  //     query: { token },
  //   });

  //   socket
  //     .on(`openedTransactions:company:${companyId}`, (res) => {
  //       this.state.openedTransactions = res;
  //     })
  //     .on(`finishedTransactions:company:${companyId}`, (res) => {
  //       this.state.finishedTransactions = res;
  //     });
  // },
  // },
});

export default store;
