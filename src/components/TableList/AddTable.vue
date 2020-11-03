<template>
  <v-container>
    <v-card>
      <v-card-title>Tabela de preços</v-card-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            bottom
            right
            absolute
            @click="(dialog = !dialog), (table = true), expand = !expand"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Adicionar novos preços</span>
      </v-tooltip>

      <v-expand-transition>

        <AddPrice v-show="expand" />

      </v-expand-transition>

    </v-card>
  </v-container>
</template>

<script>
import AddPrice from './AddPrice.vue';

export default {
  components: {
    AddPrice,
  },
  data() {
    return {
      title: '',
      dialog: false,
      table: false,
      expand: false,
    };
  },
  methods: {
    setTitle(event) {
      this.title = event.target.value;
      console.log('title>', this.title, event.target);
    },
  },
};
</script>

<style></style>
