<template>
  <div id="app">
    <v-app id="inspire">
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" dark flat height="100">
              <v-toolbar-title>Selecione o estacionamento</v-toolbar-title>
            </v-toolbar>

            <v-list flat>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-avatar color="primary" size="43"></v-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import decode from 'jwt-decode';
import axios from 'axios';

export default {
  name: 'Companies',
  props: {
    on: Boolean,
    attrs: Boolean,
  },
  data() {
    return {
      dialog: false,
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      profile: {
        id: '',
        username: '',
        email: '',
        idPerfil: '',
      },
      companies: [],
    };
  },
  async created() {
    this.getProfile();
    await this.getCompanies();
  },
  methods: {
    getProfile() {
      const token = localStorage.getItem('token');
      const decoded = decode(token);
      this.profile = decoded;
    },
    async getCompanies() {
      const token = localStorage.getItem('token');
      await axios
        .get(`/user/${this.profile.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.companies = res.data.company;
        });
    },
    next() {
      this.$router.push('home');
    },
  },
};
</script>

<style scoped></style>
