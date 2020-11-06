<template>
  <v-list>
    <template v-for="(price, i) in prices">
      <v-list-item v-if="price.weekDay" :key="i" link>
        <v-list-item-content>
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
      <v-divider v-if="price" :key="`divider-${i}`">
      </v-divider>
    </template>
  </v-list>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({}),
  async mounted() {
    this.getPrices();
  },
  computed: {
    ...mapState({
      prices: (a) => a.prices.items,
    }),
  },
  methods: {
    ...mapActions(['getPrices']),
    setTitle() {
      console.log('title>', this.prices.lenght);
    },
    split(data) {
      return data.replaceAll('|', ' | ');
    },
  },
};
</script>
