<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.text" @click="(option = item.opt)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>

      <v-container class="py-8 px-6" fluid>
        <v-row>
           <v-col cols="12">
             <InPage v-show="option === 'Home'" />
                    <ParkPage v-show="option === 'Pátio'" />
                    <OutPage v-show="option === 'Saída'" />
            <!--<v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">

                  </v-list-item>
                   <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>-->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

  <!--<v-app id="inspire">
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
    </v-navigation-drawer> -->

  <!-- v-show home -->
  <!-- <InPage v-show="option === 'Home'" />
    <ParkPage v-show="option === 'Pátio'" />
    <OutPage v-show="option === 'Saída'" /> -->
  <!-- v-show in -->
  <!-- v-show out -->

  <!--</v-app> -->
</template>

<script>
// import axios from 'axios';
import InPage from '../../components/InOut/In.vue';
import ParkPage from '../../components/InOut/Park.vue';
import OutPage from '../../components/InOut/Out.vue';

export default {
  components: {
    InPage,
    ParkPage,
    OutPage,
  },
  data() {
    return {
      drawer: true,
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
<style scoped>

</style>
