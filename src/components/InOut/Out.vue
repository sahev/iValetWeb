<template>
  <v-row>
    <v-col class="justify-content">
      <v-card>
        <v-form>
          <v-card-text>
            <v-autocomplete
              v-model="cVehicle"
              :items="openedTransactions"
              item-text="placa"
              label="Placa"
              class="display-1 text--primary"
              return-object
            ></v-autocomplete>
            <v-autocomplete
              v-model="cVehicle"
              :items="openedTransactions"
              item-text="prisma"
              label="Prisma"
              class="display-1 text--primary"
              return-object
            ></v-autocomplete>
          </v-card-text>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            @click="(model = true)"
            text
            color="deep-purple accent-4"
            class="ml-auto"
          >
            Saída
          </v-btn>
          <v-dialog v-if="cVehicle" v-model="model" max-width="400">
            <checkout :data="cVehicle" />
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import checkout from '../Transactions/Checkout.vue';

export default {
  components: {
    checkout,
  },
  created() {
    this.getVehicles();
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.openedTransactions,
    }),
  },
  data() {
    return {
      model: false,
      cVehicle: [],
      newVehicle: [],
    };
  },
  methods: {
    setData(data) {
      this.cVehicle = data;
    },
    ...mapMutations(['getVehicles']),
  },
};
</script>

<style></style>
