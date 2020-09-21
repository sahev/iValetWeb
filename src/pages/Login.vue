<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>iValet</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  v-model="username"
                  :rules="userRules"
                  label="Usuário"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="userRules"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-btn :disabled="!valid" color="primary" @click="login">Login</v-btn>

            <v-card-text>
              <a href="#/forgot">Esqueci a senha</a>
            </v-card-text>
            <v-card-text>
              Não possui login?
              <a href="#/signup">Cadastre-se</a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      userRules: [(v) => !!v || "Digite um usuário"],
      passRules: [(v) => !!v || "Digite uma senha"],
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
      console.log(this.username, this.password);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>