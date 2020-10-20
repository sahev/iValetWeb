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
            @click="(model = true), log(openedTransactions)"
            text
            color="deep-purple accent-4"
            class="ml-auto"
          >
            Saída
          </v-btn>
          <v-dialog v-if="cVehicle.id" v-model="model" max-width="400">
            <checkout :data="cVehicle" />
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import checkout from '../Transactions/Checkout.vue';

export default {
  components: {
    checkout,
  },
  created() {
    this.getOpeneds();
    this.getVehicles();
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.socket.openedTransactions,
      finishedTransactions: (a) => a.socket.finishedTransactions,
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
    log(data) {
      console.log(data);
    },
    setData(data) {
      this.cVehicle = data;
    },
    ...mapActions(['getOpeneds']),
    ...mapMutations(['getVehicles']),
  },
};
</script>

<style></style>
