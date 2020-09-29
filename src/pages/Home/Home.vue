<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs centered color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
        <Account />
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268"> entrada </v-sheet>
        </v-col>

        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268"> saída </v-sheet>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Account from '../../components/Account/Account.vue';

export default {
  components: {
    Account,
  },
  data: () => ({
    links: ['Dashboard', 'Profile'],
  }),
};
</script>
