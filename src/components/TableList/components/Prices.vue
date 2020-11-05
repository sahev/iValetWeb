<template>
  <v-col md="11">
    <v-list>
      <v-subheader>
        <v-col>
        <v-row> Tipo </v-row>
        </v-col>
                <!-- <v-col>
        <v-row> teste </v-row>
        </v-col> -->
         <v-col>
        <v-row> Dias da semana </v-row>
        </v-col>
      </v-subheader>
      <template v-for="(price, i) in prices">
        <v-list-item v-if="price.weekDay" :key="i">

          <!-- <v-list-item-content> -->
            <div> {{ price.type == 1  ? 'Fixo' : price.type == 2 ? 'Rotativo' : price.type }}</div>

          <div class="days" v-for="(days, i) in split(price.weekDay)" :key="i">
            <v-row align="center" justify="start">
              <v-chip link>
                {{ days }}
              </v-chip>
            </v-row>
          </div>
          <!-- <v-list-item-subtitle>{{ split(price.weekDay) }}</v-list-item-subtitle> -->
          <!-- </v-list-item-content> -->
        </v-list-item>
        <v-divider :key="price.id" inset></v-divider>
      </template>
    </v-list>
  </v-col>
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
      return data.split('|');
    },
  },
};
</script>
<style scoped>
.days {
  margin-left: 40px;
  /* display: flex; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
}
</style>
