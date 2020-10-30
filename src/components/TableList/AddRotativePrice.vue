<template>
  <v-container>
    <div v-for="(item, i) in items" :key="i">
      <v-row>
        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.from"
            label="De:"
            prepend-icon="mdi-clock-time-four-outline"
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.to"
            label="Até:"
            prepend-icon="mdi-clock-time-four-outline"
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="3">
          <v-text-field
            v-model="item.tolerance"
            label="Tolerância:"
            prepend-icon="mdi-clock-time-four-outline"
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.price"
            label="Valor:"
            prepend-icon="mdi-currency-usd"
          ></v-text-field>
        </v-col>

        <v-icon @click="add(item)">mdi-check</v-icon>

        <v-icon v-if="i > 0" @click="remove(i)">mdi-close</v-icon>

      </v-row>

    </div>
  </v-container>

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: {
    id_dw: Array,
  },
  components: {

  },
  data() {
    return {
      items: [
        {
          to: null,
          from: null,
          tolerance: null,
          price: null,
          weekDay: null,
        },
      ],
      inp1: null,
      inp2: null,
      data: [],
    };
  },
  computed: {
    ...mapState({
      // items: (a) => a.addrotative.items,
    }),
    reverse() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.recents.reverse();
    },
  },
  methods: {
    ...mapActions(['setPrice']),
    addPrice() {
      // eslint-disable-next-line no-unused-expressions
      // this.setPrice(this.data);
      console.log('add > ', this.data);
      this.data.push();
    },
    add(data) {
      this.items.push({
        to: null,
        from: null,
        tolerance: null,
        price: null,
        weekDay: null,
      });
      this.data.push({
        to: data.to,
        from: data.from,
        tolerance: data.tolerance,
        price: data.price,
        weekDay: this.id_dw,
      });
      console.log(this.data, this.id_dw);
    },

    remove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style></style>
