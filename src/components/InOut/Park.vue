<template>
    <v-app id="inspire">
      <v-row>
        <v-col
          v-for="vehicle in openedTransactions"
          :key="vehicle.placa"
          cols="12"
        >
          <v-card>
            <v-card-text>
              <div>Placa:</div>
              <p class="display-1 text--primary">{{ vehicle.placa }}</p>
              <v-divider></v-divider>
              <p></p>
              <div class="text--primary">
                Modelo: {{ vehicle.model }}<br />
                Prisma: {{ vehicle.prisma }}<br />
                Tempo Total: {{ datediff(vehicle.startDate) }} minutos
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="model = true, setData(vehicle)"
                text
                color="deep-purple accent-4"
                class="ml-auto"
              >
                Checkout
              </v-btn>
                <v-dialog v-model="model" v-if="cVehicle.id === vehicle.id" max-width="400">
                  <checkout :data="cVehicle" />
                </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import { mapState, mapMutations, mapActions } from 'vuex';
import checkout from '../Transactions/Checkout.vue';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

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
    ...mapActions(['getOpeneds']),
    ...mapMutations(['getVehicles']),
    datediff(date) {
      const now = dayjs(Date.now());
      return now.diff(date, 'minute');
    },
    setData(data) {
      this.cVehicle = data;
    },
    async send() {
      const { placa } = this.newVehicle;
      await axios.post(
        'transaction',
        {
          placa: placa.toString().toUpperCase(),
          companyId,
          prismaNumber: this.newVehicle.prisma,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      this.newVehicle = {};
    },
  },
};
</script>

<style></style>
