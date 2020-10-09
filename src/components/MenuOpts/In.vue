<template>
  <v-main class="grey lighten-2">
    <v-container>
      <v-row>
        <v-col cols="4" class="justify-content">
          <v-card height="300">
            <v-form>
              <v-card-text>
                <v-text-field
                  v-model="newVehicle.placa"
                  label="Placa"
                  class="display-1 text--primary"
                >
                </v-text-field>
                <!-- <v-text-field
                  v-model="newVehicle.model"
                  label="Modelo"
                  class="text--primary"
                ></v-text-field> -->
                <v-text-field
                  v-model="newVehicle.prisma"
                  label="Prisma"
                  class="text--primary"
                  type="number"
                ></v-text-field>
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn
                @click="send"
                text
                color="deep-purple accent-4"
                class="ml-auto"
              >
                Entrada
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col
          v-for="vehicle in openedTransactions"
          :key="vehicle.placa"
          cols="4"
          class="justify-content"
        >
          <v-card height="250" class="justify-content">
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
              <v-spacer />
              <v-btn @click="checkout(vehicle.id)"
              text color="deep-purple accent-4" class="ml-auto">
                Saída
              </v-btn>
            </v-card-actions>

  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sen
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import { mapState, mapMutations, mapActions } from 'vuex';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  created() {
    this.getOpeneds();
    this.getVehicles();
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.openedTransactions,
      finishedTransactions: (a) => a.finishedTransactions,
    }),
  },
  data() {
    return {
      dialog: false,
      newVehicle: [],
    };
  },
  methods: {
    ...mapActions([
      'getOpeneds',
    ]),
    ...mapMutations([
      'getVehicles',
    ]),
    datediff(date) {
      const now = dayjs(Date.now());
      return now.diff(date, 'minute');
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
    async checkout(transactionId) {
      await axios.put('transaction/finish', null,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { transactionId, companyId },
        }).then((res) => { console.log(res, transactionId); });
    },
  },
};
</script>

<style></style>
