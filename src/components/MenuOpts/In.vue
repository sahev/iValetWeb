<template>
  <v-main class="grey lighten-2">
    <v-container>
      <v-row>
        <v-col cols="4" class="justify-content">
          <v-card height="300">
            <v-form>
              <v-card-text>
                <v-text-field
                  v-model="vehicles.placa"
                  label="Placa"
                  class="display-1 text--primary"
                >
                </v-text-field>
                <v-text-field
                  v-model="vehicles.model"
                  label="Modelo"
                  class="text--primary"
                ></v-text-field>
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
                Entrada
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
          <v-card height="230">
            <v-card-text>
              <div>Placa:</div>
              <p class="display-1 text--primary">{{ vehicle.placa }}</p>
              <v-divider></v-divider>
              <p></p>
              <div class="text--primary">
                Modelo: {{ vehicle.model }}<br />
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
          placa: 'DRU-4732',
          time: '130',
          prisma: '',
        },
        {
          model: 'sandero',
          placa: 'ERO-4222',
          time: '50',
          prisma: '',
        },
      ],
    };
  },
  methods: {
    send() {
      const { model, placa, prisma } = this.vehicles;
      this.vehicles.push({ model, placa, prisma });
      this.vehicles.placa = '';
      this.vehicles.model = '';
      this.vehicles.prisma = '';
    },
  },
};
</script>

<style></style>
