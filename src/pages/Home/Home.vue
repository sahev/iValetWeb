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
    <ParkPage v-show="option === 'Pátio'" />
    <OutPage v-show="option === 'Saída'" />
    <!-- v-show in -->
    <!-- v-show out -->

  </v-app>
</template>

<script>
// import axios from 'axios';
import Home from '../../components/InOut/Home.vue';
import ParkPage from '../../components/InOut/Park.vue';
import OutPage from '../../components/InOut/Out.vue';

export default {
  components: {
    Home,
    ParkPage,
    OutPage,
  },
  data() {
    return {
      drawer: null,
      mini: true,
      option: 'Home',
      items: [
        { icon: 'mdi-home', text: 'Home', opt: 'Home' },
        { icon: 'mdi-car-arrow-left', text: 'Pátio', opt: 'Pátio' },
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
