<template>
  <v-container>
    <v-row>
      <v-col id="col" cols="2" sm="2">
        <v-menu
          ref="menu1"
          v-model="inp1"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="data.from"
          transition="scale-transition"
          offset-y
          max-width="250px"
          min-width="250px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="data.from"
              label="De:"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="inp1"
            v-model="data.from"
            full-width
            @click:minute="$refs.menu1.save(data.from)"
          ></v-time-picker>
        </v-menu>
      </v-col>

      <v-col id="col" cols="2" sm="2">
        <v-menu
          ref="menu2"
          v-model="inp2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="data.to"
          transition="scale-transition"
          offset-y
          max-width="250px"
          min-width="250px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="data.to"
              label="Até:"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="inp2"
            v-model="data.to"
            full-width
            @click:minute="$refs.menu2.save(data.to)"
          ></v-time-picker>
        </v-menu>
      </v-col>

      <v-col id="col" cols="2" sm="2">
        <v-text-field
          v-model="data.price"
          label="Valor:"
          prepend-icon="mdi-currency-usd"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="addPrice">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      inp1: null,
      inp2: null,
      data: {
        to: null,
        from: null,
        price: null,
      },
    };
  },
  methods: {
    ...mapActions(['setFrom', 'setTo', 'setPrice']),
    addPrice() {
      // eslint-disable-next-line no-unused-expressions
      this.setPrice(this.data);
      console.log('add > ', this.data);
    },
  },
};
</script>
<style scoped></style>
