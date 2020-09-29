<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-col md="4">
        <v-card class="elevation-8" height="500">
          <v-toolbar color="primary" dark flat height="100">
            <v-toolbar-title>Olá, {{ profile.username }}!</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-combobox
              :items="companies"
              item-text="name"
              label="Selecione o estacionamento"
              required
            ></v-combobox>
            </v-card-text>
            <v-spacer> </v-spacer>
          <v-btn color="primary" @click="next">Continuar</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import decode from 'jwt-decode';
import axios from 'axios';

export default {
  name: 'Companies',
  data() {
    return {
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

<style scoped>
</style>
