<template>
  <v-app id="inspire">
    <v-row align="center" justify="center" v-show="option">
      <v-col md="4">
        <v-card class="elevation-8" height="550">
          <v-toolbar color="primary" dark flat height="100">
            <v-toolbar-title
              >iValet - Selecione o tipo de cadastro</v-toolbar-title
            >
          </v-toolbar>
          <div id="options">
            <v-card-text>
              <v-card-text>
                <v-btn
                  rounded
                  outlined
                  color="primary"
                  dark
                  @click="(user = true), (option = false)"
                >
                  <v-icon left medium>mdi-account-plus</v-icon>
                  Cliente
                </v-btn>
              </v-card-text>
              <v-card-text>
                <v-btn
                  rounded
                  outlined
                  color="primary"
                  dark
                  @click="(owner = true), (option = false)"
                >
                  <v-icon left medium>mdi-home-city</v-icon>
                  Empresa
                </v-btn>
              </v-card-text>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <User v-show="user" />
    <Owner v-show="owner" />
  </v-app>
</template>

<script>
import Owner from '../../components/Register/Owner.vue';
import User from '../../components/Register/User.vue';

export default {
  name: 'Signup',
  components: {
    Owner,
    User,
  },
  data() {
    return {
      valid: true,
      ok: true,
      option: true,
      owner: false,
      user: false,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#options {
  height: 75%;
  display: flex;
  align-items: center;
}
</style>
