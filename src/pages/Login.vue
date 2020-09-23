<template>
  <v-app id="inspire" transition="scale-transition">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8" height="500">
            <v-toolbar color="primary" dark flat height="100">
              <v-toolbar-title>iValet</v-toolbar-title>
            </v-toolbar>
            <v-container>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    v-model="loginForm.username"
                    :rules="[v => /.+@.+\..+/.test(v) || 'Digite um e-mail válido', ok ? ok : '']"
                    label="E-mail"
                    type="email"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="loginForm.password"
                    :rules="[(v) => !!v || 'Digite uma senha', ok ? ok : 'Credenciais inválidas']" 
                    label="Senha"
                    type="password"
                    @keypress.enter="login"
                    required
                  ></v-text-field>
                  <!-- <v-alert
                    :value="invalidpass"
                    color="pink"
                    dark
                    border="top"
                    icon="mdi-cancel"
                    transition="scale-transition"
                  >Credenciais inválidas</v-alert> -->
                </v-form>
              </v-card-text>
            </v-container>

            <v-btn :disabled="!valid" color="primary" @click="login">Login</v-btn>

            <v-card-text>
              <a href="#/forgot">Esqueci a senha</a>
            </v-card-text>
            <v-card-text>
              Não possui login?
              <router-link to="signup">Cadastre-se</router-link>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Login",
  data() {
    return {
      valid: true,
      invalidpass: false,
      ok: true,
      loginForm: {
        username: "",
        password: "",
      },
      passRules: [(v) => !!v || "Digite uma senha"],
    };
  },
  watch: {},
  methods: {
    async login() {
      if (
        this.loginForm.username.length == 0 ||
        this.loginForm.password.length == 0
      ) {
        this.$refs.form.validate();
      } else {
        try {
          await axios.post("auth", this.loginForm).then((res) => {
            this.ok = true
            localStorage.setItem("token", res.data.access_token);
            router.push("home").catch((err) => {
              console.log(err);
            });
          });
        } catch {
          this.ok = false
          localStorage.removeItem("token");
          this.invalidpass = true;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>