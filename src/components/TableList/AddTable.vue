<template>
  <v-container>
    <v-card>
        <v-card-title>{{ title }}</v-card-title>
      <v-btn
        fab
        color="primary"
        bottom
        right
        absolute
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-container v-show="table">
        <AddPrice />
      </v-container>
    </v-card>

    <v-card> </v-card>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field label="Tabela de preço"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" v-model="title"
          @click="(dialog = false), (table = true)">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    };
  },
  methods: {
    setTitle(event) {
      this.title = event.target.value;
      console.log('ttitle>', this.title, event.target);
    },
  },
};
</script>

<style></style>
