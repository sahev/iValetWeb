<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>

      <!-- <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div class="text--primary">samuel evangelista</div>
        <div class="text--primary">company xxx</div>
      </v-sheet> -->
  <Profile />
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click="option = item.opt"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="d-flex">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="d-flex"> Sair </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-app-bar color="deep-purple" dark
            app
      clipped-right>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>iValet</v-toolbar-title>
      </v-app-bar>
      <v-container  class="justify-content" v-show="option === 'Pátio'">
        <v-row >
          <v-col>
            <ParkPage />
          </v-col>
        </v-row>
      </v-container>
      <v-container v-show="option === 'Home'">
        <v-expansion-panels v-model="panel" focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>Entrada/Saída</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="6">
                  <InPage />
                </v-col>
                <v-col cols="6">
                  <OutPage />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
      <v-divider />

      <v-container>
        <v-expansion-panels focusable>
          <v-expansion-panel multiple>
            <v-expansion-panel-header>Dashboard</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscinost
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
              <v-navigation-drawer
      app
      clipped
      right
    >
        <v-list three-line>
      <template v-for="(item, index) in recents">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >Atividades recentes</v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
// import axios from 'axios';
import InPage from '../../components/InOut/In.vue';
import ParkPage from '../../components/InOut/Park.vue';
import OutPage from '../../components/InOut/Out.vue';
import Profile from '../../components/Account/Account.vue';

export default {
  components: {
    InPage,
    ParkPage,
    OutPage,
    Profile,
  },
  data() {
    return {
      panel: 0,
      drawer: true,
      mini: true,
      option: 'Home',
      items: [
        { icon: 'mdi-home', text: 'Home', opt: 'Home' },
        { icon: 'mdi-car-multiple', text: 'Pátio', opt: 'Pátio' },
        { icon: 'mdi-cog', text: 'Configurações', opt: 'Configurações' },
      ],
      recents: [
        { header: 'Atividades Recentes' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'ERO1232',
          subtitle:
            'Entrada',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'ERO1234',
          subtitle:
            'Saída',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'ERO1235',
          subtitle:
            'Saída',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'ERO1236',
          subtitle:
            'Entrada',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'ERO1237',
          subtitle:
            'Entrada',
        },
      ],
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
<style scoped></style>
