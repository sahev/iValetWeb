import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import socket from './modules/socket';
import addrotative from './modules/addrotative';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
    socket,
    addrotative,
  },
});
