import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import socket from './modules/socket';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
    socket,
  },
});
