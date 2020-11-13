<template>
  <div>
    <v-expand-transition>
    <v-list v-show="!pricedetails">
      <template v-for="(price, i) in prices">
        <v-list-item v-if="price.weekDay" :key="i" link>
          <v-list-item-content
            @click="getPriceDetails(price.uniqueIdPrice), (pricedetails = true)"
          >
            <div>
              <v-card-title>
                {{ split(price.weekDay) }}
              </v-card-title>
              <v-card-subtitle class="text-left align-self-start">
                {{
                  price.type == 1
                    ? "Fixo"
                    : price.type == 2
                    ? "Dinâmico"
                    : price.type
                }}
              </v-card-subtitle>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="price" :key="`divider-${i}`"> </v-divider>
      </template>
    </v-list>
    </v-expand-transition>
    <v-expand-transition>
      <ShowDetails v-show="pricedetails" />
    </v-expand-transition>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          bottom
          left
          absolute
          @click="pricedetails = !pricedetails"
          v-bind="attrs"
          v-on="on"
          v-show="pricedetails"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <span>Voltar</span>
    </v-tooltip>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import ShowDetails from './ShowDetails.vue';

export default {
  components: {
    ShowDetails,
  },
  data: () => ({
    pricedetails: false,
  }),
  async mounted() {
    this.getPrices();
  },
  computed: {
    ...mapState({
      prices: (a) => a.prices.items,
      details: (a) => a.prices.details,
    }),
  },
  methods: {
    ...mapActions(['getPrices', 'getPriceDetails']),
    log() {
      console.log('prices>', this.prices, 'details>', this.details);
      // console.log(data);
    },
    split(data) {
      return data.replaceAll('|', ' | ');
    },
  },
};
</script>
