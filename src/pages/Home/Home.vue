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
          @click="(option = item.opt), (recents = item.recents)"
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

        <v-list-group
          v-for="item in config"
          :key="item.text"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="d-flex"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            @click="option = child.opt"
            v-for="child in item.items"
            :key="child.name"
          >
            <v-list-item-content>
              <v-list-item-title
                class="mx-auto"
                v-text="child.name"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

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
      <v-app-bar color="deep-purple" dark app clipped-right>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>iValet</v-toolbar-title>
      </v-app-bar>
      <v-container class="justify-content" v-show="option === 'Pátio'">
        <v-row>
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
      <v-container v-show="option === 'table'">
        <AddTable />
      </v-container>
      <v-container v-show="option === 'Perfil'">
        <v-col> perfil </v-col>
      </v-container>

      <!-- <v-container v-show="option === 'cfg'">
        <v-expansion-panels focusable>
          <v-expansion-panel multiple>
            <v-expansion-panel-header
              >Tabela de preços</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <AddTable />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels focusable>
          <v-expansion-panel multiple>
            <v-expansion-panel-header>Perfil</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col> perfil </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container> -->
    </v-main>

    <RecentsActivity v-show="recents" />
  </v-app>
</template>

<script>
// import axios from 'axios';
import InPage from '../../components/InOut/In.vue';
import ParkPage from '../../components/InOut/Park.vue';
import OutPage from '../../components/InOut/Out.vue';
import Profile from '../../components/Account/Account.vue';
import RecentsActivity from '../../components/Recents/RecentsActivity.vue';
import AddTable from '../../components/TableList/AddTable.vue';

export default {
  components: {
    InPage,
    ParkPage,
    OutPage,
    Profile,
    RecentsActivity,
    AddTable,
  },
  data() {
    return {
      recents: true,
      panel: 0,
      drawer: true,

      option: 'Home',
      items: [
        {
          icon: 'mdi-home',
          text: 'Home',
          opt: 'Home',
          recents: true,
        },
        {
          icon: 'mdi-car-multiple',
          text: 'Pátio',
          opt: 'Pátio',
          recents: true,
        },
      ],
      config: [
        {
          icon: 'mdi-cog',
          text: 'Configurações',
          items: [
            {
              name: 'Tabela de Preços', opt: 'table', icon: 'mdi-home', recents: false,
            },
            {
              name: 'Perfil', opt: 'Perfil', icon: 'mdi-home', recents: false,
            },
          ],
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
