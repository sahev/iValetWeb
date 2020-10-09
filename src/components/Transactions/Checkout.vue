<template>
  <v-card>
    <v-card-title class="headline">
      {{ data.placa }}
    </v-card-title>
    <v-card-text>
      <v-col>
        <v-row>
          <h3>Prisma: {{ data.prisma }}</h3>
        </v-row>
        <v-row>
          <h3>Tempo total: {{ datediff(data.startDate) }} minutos</h3>
        </v-row>
        <v-row>
          <h3>Valor: R$ xx,xx</h3>
        </v-row>
      </v-col>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green darken-1"
        text
        @click="(dialog = false), checkout(data.id)"
      >
        Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';

const token = localStorage.getItem('token');
// eslint-disable-next-line radix
const companyId = parseInt(localStorage.getItem('company'));

export default {
  props: {
    data: {},
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    datediff(date) {
      const now = dayjs(Date.now());
      return now.diff(date, 'minute');
    },
    async checkout(transactionId) {
      await axios.put('transaction/finish', null, {
        headers: { Authorization: `Bearer ${token}` },
        params: { transactionId, companyId },
      });
    },
  },
};
</script>
