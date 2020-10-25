<template>
  <v-container>
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

      <AddRotativePrice v-show="rotative" />

      <AddFixedPrice v-show="fixed"/>

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
      switch1: false,
      switch2: false,
      rotative: false,
      fixed: false,
    };
  },
};
</script>

<style></style>
