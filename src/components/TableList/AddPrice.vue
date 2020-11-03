<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-btn-toggle v-model="id_dw" multiple>
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
      model: {{ id_dw }}
    </v-row>
    <v-row>
      <v-subheader> AddFixedPrice </v-subheader>
      <v-subheader>
        <v-switch
          v-model="switch2"
          @click="
            (fixed = !fixed),
              switch2 ? ((switch1 = false), (rotative = false)) : ''
          "
        ></v-switch>
      </v-subheader>

      <v-subheader> AddRotativePrice </v-subheader>
      <v-subheader>
        <v-switch
          v-model="switch1"
          @click="
            (rotative = !rotative),
              switch1 ? ((switch2 = false), (fixed = false)) : ''
          "
        ></v-switch>
      </v-subheader>
    </v-row>
<v-expand-transition>
    <AddRotativePrice v-show="rotative" :id_dw="id_dw" />
</v-expand-transition>
  <v-expand-transition>
    <AddFixedPrice v-show="fixed" />
    </v-expand-transition>
  </v-container>
</template>

<script>
import AddRotativePrice from './AddRotativePrice.vue';
import AddFixedPrice from './AddFixedPrice.vue';

export default {
  components: {
    AddRotativePrice,
    AddFixedPrice,
  },
  data() {
    return {
      dw: ['s', 't', 'q', 'q', 's', 's', 'd'],
      id_dw: [],
      switch1: false,
      switch2: false,
      rotative: false,
      fixed: false,
    };
  },
};
</script>

<style></style>
