<template>
  <div>
    rotative

    <v-row align="center" justify="center">
      <v-btn-toggle v-model="toggle_exclusive" multiple>
        <v-btn
          v-for="(item, index) in dw"
          :key="index"
          color="secondary"
          class="ma-1"
          medium
          outlined
        >
          {{ item }}
        </v-btn>
      </v-btn-toggle>

    </v-row>
          model: {{ toggle_exclusive }}
         <v-container>
          <v-card>
              <Add/>
          </v-card>
          </v-container>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import Add from './components/Add.vue';

export default {
  components: {
    Add,
  },
  data() {
    return {
      dw: ['s', 't', 'q', 'q', 's', 's', 'd'],
      toggle_exclusive: [],
    };
  },
  computed: {
    ...mapState({
      items: (a) => a.datepicker.items,
    }),
    reverse() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.recents.reverse();
    },
  },
  methods: {
    log() {
      console.log(this.items);
    },
  },
};
</script>

<style></style>
