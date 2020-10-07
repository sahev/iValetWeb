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
          v-for="vehicle in vehicles"
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
              <v-btn text color="deep-purple accent-4" class="ml-auto">
                Saída
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import * as io from 'socket.io-client';
import axios from 'axios';
import dayjs from 'dayjs';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  async created() {
    await this.getOpeneds();
    const socket = io.connect('http://ragazzitech.caioragazzi.com:81/', {
      query: { token },
    });

    socket.on(`openedTransactions:company:${companyId}`, (res) => {
      this.vehicles = res;
    });
  },
  data() {
    return {
      newVehicle: [],
      vehicles: [],
    };
  },
  methods: {
    async getOpeneds() {
      await axios
        .get(`transaction/opened/${companyId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.vehicles = res.data;
        });
    },
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
      this.newVehicle = '';
    },
  },
};
</script>

<style></style>
