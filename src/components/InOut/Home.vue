<template>
  <v-app id="inspire">
  <v-main class="grey lighten-2">
    <v-row>
      <v-col cols="4" class="justify-content">
        <v-card height="230">
          <v-form>
            <v-card-text>
              <v-text-field
                v-model="newVehicle.placa"
                label="Placa"
                class="display-1 text--primary"
              >
              </v-text-field>
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
  </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  components: {

  },
  created() {
    this.getOpeneds();
    this.getVehicles();
  },
  computed: {

  },
  data() {
    return {
      model: false,
      cVehicle: [],
      newVehicle: [],
    };
  },
  methods: {
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
