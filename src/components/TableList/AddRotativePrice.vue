<template>
  <v-container>
    <div v-for="(item, i) in items" :key="i">
      <v-form ref="form" lazy-validation>
      <v-row>
        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.from"
            label="De:"
            prepend-icon="mdi-clock-time-four-outline"
            :rules="[
              (val) => (val || '').length > 0 || 'Insira um tempo mínimo',
            ]"
            color="purple darken-2"
            required
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.to"
            label="Até:"
            prepend-icon="mdi-clock-time-four-outline"
            :rules="[
              (val) => (val || '').length > 0 || 'Insira um tempo máximo',
            ]"
            color="purple darken-2"
            required
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="3">
          <v-text-field
            v-model="item.tolerance"
            label="Tolerância:"
            prepend-icon="mdi-clock-time-four-outline"
            :rules="[
              (val) => (val || '').length > 0 || 'Insira a tolerância',
            ]"
            color="purple darken-2"
            required
          ></v-text-field>
        </v-col>

        <v-col id="col" cols="2" sm="2">
          <v-text-field
            v-model="item.price"
            label="Valor:"
            prepend-icon="mdi-currency-usd"
            :rules="[
              (val) => (val || '').length > 0 || 'Insira um valor',
            ]"
            color="purple darken-2"
            required
          ></v-text-field>
        </v-col>

        <v-icon @click="add(item, i)">mdi-check</v-icon>

        <v-icon v-if="i > 0" @click="remove(i)">mdi-close</v-icon>
      </v-row>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: {
    id_dw: Array,
  },
  components: {},
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
  created() {},
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
    add(data, index) {
      if (this.$refs.form[index].validate()) {
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
      }
      console.log(this.$refs.form[index]);
    },
    remove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style></style>
