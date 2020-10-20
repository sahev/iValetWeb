<template>
  <v-navigation-drawer app clipped right>

    <v-list three-line>

      <template v-for="(item, index) in recents">
        <v-subheader v-if="item.header" :key="item.header"
          >Atividades recentes</v-subheader
        >

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </template>
      <v-btn @click="log()">{{ itemss }}</v-btn>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'RecentsActivity',
  props: ['itemss'],
  methods: {
    ...mapActions(['getOpeneds']),
    ...mapMutations(['getVehicles']),
    log() {
      console.log('localData: ', this.list);
    },
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.socket.openedTransactions,
      finishedTransactions: (a) => a.socket.finishedTransactions,
    }),
  },
  watch: {
    openedTransactions(newValue, oldValue) {
      console.log('watch opened', newValue, oldValue);
    },
    // finishedTransactions(newValue) {
    //   const a = newValue;
    //   console.log('watch finished');
    //   this.list.push(a.slice(-1)[0]);
    // },
  },
  created() {
    this.getVehicles();
  },
  data() {
    return {
      list: [],
      recents: [
        { header: 'Atividades Recentes' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'ERO1232',
          subtitle: 'Entrada',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'ERO1234',
          subtitle: 'Saída',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'ERO1235',
          subtitle: 'Saída',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'ERO1236',
          subtitle: 'Entrada',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'ERO1237',
          subtitle: 'Entrada',
        },
      ],
    };
  },
};
</script>

<style></style>
