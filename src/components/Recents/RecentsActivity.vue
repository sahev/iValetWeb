<template>
  <v-navigation-drawer app clipped right >
    <v-list two-line>
              <v-subheader
          >Atividades recentes</v-subheader
        >
      <template v-for="(item, index) in reverse">
        <v-subheader v-if="reverse.header" :key="index"
          ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.index">
          <v-list-item-avatar>
            <!-- <v-img :src="item.avatar"></v-img> -->
            <v-avatar color="secondary" size="43">
              <span class="white--text"> img </span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.placa"></v-list-item-title>
            <v-list-item-subtitle v-html="item.info.status"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'RecentsActivity',
  methods: {
    ...mapActions(['getOpeneds']),
    ...mapMutations(['getVehicles']),
  },
  computed: {
    ...mapState({
      openedTransactions: (a) => a.socket.openedTransactions,
      finishedTransactions: (a) => a.socket.finishedTransactions,
      recents: (a) => a.socket.recents,
    }),
    reverse() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.recents.reverse();
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.v-list{
  height: auto;
}
</style>
