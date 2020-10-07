<template>
  <v-card height="50vh" class="rounded-0">
    <v-toolbar color="primary" dark flat max-height="100">
      <v-toolbar-title>Selecione o estacionamento</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item-group
        v-for="company in companies"
        :key="company.id"
        color="primary"
      >
        <v-list-item @click="next(company.id)">
          <v-avatar color="secondary" size="43">
            <span class="white--text">
              {{ getInitials(company.name) }}
            </span>
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="company.name" />
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'Companies',
  props: {
    companies: {},
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    getInitials(name) {
      const lastspace = name.lastIndexOf(' ');
      const firstname = name.charAt(0);
      const lastname = name.substring(lastspace + 1, lastspace + 2);

      if (lastspace > 0) {
        this.lastname = name.substring(lastspace + 1, lastspace + 2);
      }
      return (firstname + lastname).toUpperCase();
    },
    next(id) {
      localStorage.setItem('company', id);
      window.location.replace('home');
    },
  },
};
</script>

<style scoped></style>
