<template>
  <v-app id="inspire" transition="scale-transition">
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
                  @keyup="ok = true"
                  :rules="[
                    (v) => /.+@.+\..+/.test(v) || 'Digite um e-mail válido',
                    ok ? ok : '',
                  ]"
                  label="E-mail"
                  type="email"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="loginForm.password"
                  :rules="[
                    (v) => !!v || 'Digite uma senha',
                    ok ? ok : 'Login e/ou senha inválidos',
                    (value) =>
                      (value && value.length >= 6) || 'Min 6 caracteres',
                  ]"
                  label="Senha"
                  type="password"
                  @keypress.enter="login"
                  @keyup="ok = true"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-container>
          <v-btn color="primary" @click="login" :disabled="!valid">Login</v-btn>
          <v-card-text>
            <router-link to="forgot">Esqueci a senha</router-link>
          </v-card-text>
          <v-card-text>
            Não possui login?
            <router-link to="signup">Cadastre-se</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      width="50vh"
      content-class="rounded-xl"
    >
      <choose-company :companies="companies" />
      <v-btn class="rounded-0" @click="dialog = false">fechar</v-btn>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';
import decode from 'jwt-decode';
import ChooseCompany from '../components/Account/ChooseCompany.vue';

export default {
  components: {
    ChooseCompany,
  },
  name: 'Login',
  data() {
    return {
      dialog: false,
      valid: true,
      invalidpass: false,
      companies: {},
      ok: true,
      token: localStorage.getItem('token'),
      loginForm: {
        username: '',
        password: '',
      },
    };
  },
  watch: {},
  methods: {
    async login() {
      if (
        this.loginForm.username.length === 0
        || this.loginForm.password.length === 0
      ) {
        this.$refs.form.validate();
      } else {
        await axios
          .post('auth', this.loginForm)
          .then((res) => {
            this.ok = true;
            localStorage.setItem('token', res.data.access_token);
            this.getCompanies();
          })
          .catch(() => {
            this.ok = false;
            localStorage.removeItem('token');
            this.invalidpass = true;
          });
      }
    },
    async getCompanies() {
      const token = localStorage.getItem('token');
      const { id } = decode(token);
      await axios
        .get(`/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.company.length > 1) {
            this.companies = res.data.company;
            this.dialog = true;
          } else {
            this.$router.push('home');
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rounded-xl {
  border-radius: 25px;
}
</style>
