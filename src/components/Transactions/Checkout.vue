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
        @click="checkout(data.id, companyId), setOut(data)"
      >
        Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import { mapActions, mapState } from 'vuex';

// const token = localStorage.getItem('token');
// eslint-disable-next-line radix
// const companyId = parseInt(localStorage.getItem('company'));

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      finishvehicle: [],
    };
  },
  computed: {
    ...mapState({
      companyId: (state) => state.profile.items.companyId,
      token: (state) => state.profile.items.token,
    }),
  },
  methods: {
    ...mapActions(['setOut']),
    datediff(date) {
      const now = dayjs(Date.now());
      return now.diff(date, 'minute');
    },
    async checkout(transactionId, companyId) {
      await axios.put('transaction/finish', null, {
        headers: { Authorization: `Bearer ${this.token}` },
        params: { transactionId, companyId },
      });
    },
  },
};
</script>
