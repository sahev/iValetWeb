<template>
  <v-container>
    <v-card>
      <v-card-title>Tabela de preços</v-card-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            bottom
            right
            absolute
            @click="expand = !expand,
            setButton(true)"
            v-bind="attrs"
            v-on="on"
            v-show="!statusButton"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Adicionar novos preços</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            bottom
            left
            absolute
            @click="expand = !expand,
            setButton(false)"
            v-bind="attrs"
            v-on="on"
            v-show="statusButton"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <span>Voltar</span>
      </v-tooltip>

      <v-expand-transition>

        <AddPrice v-show="statusButton" />

      </v-expand-transition>

      <v-card-text v-show="!statusButton">
        <Prices />
        </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AddPrice from './components/AddPrice.vue';
import Prices from './components/Prices.vue';

export default {
  components: {
    AddPrice,
    Prices,
  },
  data() {
    return {
      add: true,
      save: false,
      expand: false,
    };
  },
  async mounted() {
    this.getPrices();
  },
  computed: {
    ...mapState({
      statusButton: (a) => a.addrotative.statusButton,
      prices: (a) => a.prices.items,
    }),
  },
  methods: {
    ...mapActions(['setButton', 'getPrices']),
    setTitle() {
      console.log('title>', this.prices);
    },
  },
};
</script>

<style></style>
