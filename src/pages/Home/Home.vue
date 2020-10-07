<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>iValet</v-toolbar-title>

        <v-tab disabled> {{ option }} </v-tab>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.icon"
          @click="(option = item.opt), (drawer = !drawer)"
        >
          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            Logout
          </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- v-show home -->
    <Home v-show="option === 'Home'" />
    <InPage v-show="option === 'Entrada'" />
    <OutPage v-show="option === 'Saída'" />
    <!-- v-show in -->
    <!-- v-show out -->

  </v-app>
</template>

<script>
// import axios from 'axios';
import Home from '../../components/MenuOpts/Home.vue';
import InPage from '../../components/MenuOpts/In.vue';
import OutPage from '../../components/MenuOpts/Out.vue';

export default {
  components: {
    Home,
    InPage,
    OutPage,
  },
  data() {
    return {
      drawer: null,
      mini: true,
      option: 'Home',
      items: [
        { icon: 'mdi-home', text: 'Home', opt: 'Home' },
        { icon: 'mdi-car-arrow-left', text: 'Entrada', opt: 'Entrada' },
        { icon: 'mdi-car-arrow-right', text: 'Saída', opt: 'Saída' },
      ],
      //     vehicles: [],
      //   };
      // },
      // methods: {
      //   getVehicles() {
      //     this.vehicles = axios.get('/transaction/opened/{companyId}'),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.replace('/');
    },
  },
};
</script>
