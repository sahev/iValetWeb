import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://ragazzitech.caioragazzi.com:81/';
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        light: {
          primary: '#832D25',
          secondary: '#E1DBD4',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  }),
  router,
  render: (h) => h(App),
}).$mount('#app');
