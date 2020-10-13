<template>
  <v-main class="grey lighten-2">
    <v-container>
      <v-row>
        <v-col cols="4" class="justify-content">
          <v-card height="230">
            <v-form>
              <v-card-text>
                <v-autocomplete
                  :items="vehicles"
                  item-text="placa"
                  label="Placa"
                  class="display-1 text--primary"
                ></v-autocomplete>
                <v-text-field
                  v-model="vehicles.prisma"
                  label="Prisma"
                  class="text--primary"
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
                Saída
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-divider />
      <v-row>
        <v-col
          v-for="vehicle in vehicles"
          :key="vehicle.placa"
          cols="4"
          class="justify-content"
        >
          <v-card height="250">
            <v-card-text>
              <div>Placa:</div>
              <p class="display-1 text--primary">{{ vehicle.placa }}</p>
              <v-divider></v-divider>
              <p></p>
              <div class="text--primary">
                Modelo: {{ vehicle.model }}<br />
                Prisma: {{ vehicle.prisma }}<br />
                Tempo Total: {{ vehicle.time }} minutos
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn text color="deep-purple accent-4" class="ml-auto">
                Saída
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [
        {
          model: 'celta',
          placa: 'DRU4732',
          time: '130',
          prisma: 122,
        },
        {
          model: 'sandero',
          placa: 'ERO4222',
          time: '50',
          prisma: 12,
        },
      ],
    };
  },
  methods: {
    send() {
      const { model, placa, prisma } = this.vehicles;
      this.vehicles.push({
        placa: placa.toString().toUpperCase(),
        model: model.toString().toUpperCase(),
        prisma,
      });
      this.vehicles.placa = '';
      this.vehicles.model = '';
      this.vehicles.prisma = '';
    },
  },
};
</script>

<style></style>
