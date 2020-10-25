<template>
  <!-- <v-app id="inspire"> -->
    <v-row>
      <v-col>
        <v-card>
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
  <recents v-if="model" :itemss="newVehicle"/>
      </v-col>
    </v-row>
  <!-- </v-app> -->
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import recents from '../Recents/RecentsActivity.vue';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  components: {
    recents,
  },
  data() {
    return {
      model: false,
      newVehicle: [],
      info: { status: 'Entrada', date: Date.now() },
    };
  },
  methods: {
    ...mapActions(['setIn']),
    async send() {
      const { placa } = this.newVehicle;
      const obj = {
        placa: placa.toString().toUpperCase(),
        companyId,
        prismaNumber: this.newVehicle.prisma,
      };

      await axios.post(
        'transaction',
        obj,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      obj.info = this.info;
      this.setIn(obj);
      this.newVehicle = {};
    },
  },
};
</script>

<style></style>
