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
            @click="(model = true), setStatus(info)"
            text
            color="deep-purple accent-4"
            class="ml-auto"
          >
            Saída
          </v-btn>
          <v-dialog v-model="model" max-width="400">
            <checkout :data="cVehicle"/>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import checkout from '../Transactions/Checkout.vue';

export default {
  components: {
    checkout,
  },
  created() {
    this.getOpeneds();
    // this.getVehicles();
    // this.setFinished();
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.socket.openedTransactions,
      // finishedTransactions: (a) => a.socket.finishedTransactions,
      // recentss: (a) => a.socket.recents,
    }),
  },
  data() {
    return {
      model: false,
      info: { status: 'Saída', date: Date.now() },
      cVehicle: [],
      newVehicle: [],
    };
  },
  methods: {
    log(data) {
      console.log(data);
    },
    setStatus(data) {
      this.cVehicle.info = data;
    },
    ...mapActions(['getOpeneds']),
    // ...mapMutations(['getVehicles']),
  },
};
</script>

<style></style>
