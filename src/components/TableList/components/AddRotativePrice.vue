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
<!-- <div>
        <v-icon style="margin-top: 35px;" @click="add(item, i)">mdi-check</v-icon>
</div> -->
<div>
        <v-icon style="margin-top: 35px;" v-if="i > 0" @click="remove(i)">mdi-close</v-icon>
        </div>
      </v-row>
      </v-form>

<v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            bottom
            right
            absolute
            @click="log(), add(item, i)"
            v-bind="attrs"
            v-on="on"
            v-show="statusButton"
            color="success"
          >
            <v-icon>mdi-table-plus</v-icon>
          </v-btn>
        </template>
        <span>Salvar</span>
      </v-tooltip>

    </div>
          <div>
        <v-icon @click="addrows()">mdi-plus</v-icon>
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
      form: {},
      type: 2,
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
  created() {
  },
  computed: {
    ...mapState({
      statusButton: (a) => a.addrotative.statusButton,
    }),
    reverse() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.recents.reverse();
    },
  },
  methods: {
    log() {
      // this.setButton(false);
      console.log(this.statusButton);
    },
    ...mapActions(['setPrice', 'setButton']),
    addPrice() {
      // eslint-disable-next-line no-unused-expressions
      // this.setPrice(this.data);
      console.log('add > ', this.data);
      this.data.push();
    },
    add(data, index) {
      if (this.$refs.form[index].validate()) {
        this.items.push({
          type: this.type,
          to: null,
          from: null,
          tolerance: null,
          price: null,
          weekDay: null,
        });
        this.data.push({
          type: this.type,
          to: data.to,
          from: data.from,
          tolerance: data.tolerance,
          price: Number(data.price),
          weekDay: this.id_dw,
        });
        // eslint-disable-next-line no-unused-expressions
        this.setButton(false);
        // eslint-disable-next-line no-unused-expressions
        // this.setPrice(this.data);
        console.log(this.data);
      }
    },
    save(data, index) {
      if (this.$refs.form[index].validate()) {
        this.data.push({
          to: data.to,
          from: data.from,
          tolerance: data.tolerance,
          price: parseInt(data.price, 2),
          weekDay: this.id_dw,
        });
        // eslint-disable-next-line no-unused-expressions
        this.setButton(false);
        // eslint-disable-next-line no-unused-expressions
        // this.setPrice(this.data);
        console.log('save item >>>> ', this.data);
      }
    },
    remove(index) {
      this.data.splice(index, 1);
      this.data.splice(index, 1);
    },
    addrows() {
      this.items.push({
        to: null,
        from: null,
        tolerance: null,
        price: null,
        weekDay: null,
      });
    },
  },
};
</script>

<style></style>
