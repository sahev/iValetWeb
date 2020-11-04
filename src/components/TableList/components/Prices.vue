<template>
  <v-col
    cols="8"
    sm="11"
    offset-lx="2"
  >
      <v-list>
        <template v-for="(price, i) in prices">
          <v-list-item
            v-if="price.weekDay"
            :key="i"
          >
          <v-list-item-icon>
              {{ i + 1 }}
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle>{{ split(price.weekDay) }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            :key="price.id"
            inset
          ></v-divider>
        </template>
      </v-list>
  </v-col>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    inset: true,
    items: [
      {
        action: 'mdi-label',
        title: 'List item 1',
      },
      {
        divider: true,
      },
      {
        action: 'mdi-label',
        title: 'List item 2',
      },
      {
        divider: true,
      },
      {
        action: 'mdi-label',
        title: 'List item 3',
      },
    ],
  }),
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
      return data.replace('|', ', ');
    },
  },
};
</script>
