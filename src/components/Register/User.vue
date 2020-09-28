<template>
  <v-app id="inspire">
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8" height="550">
            <v-toolbar color="primary" dark flat height="100">
              <v-toolbar-title>iValet - Cadastro</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  v-model="usrForm.name"
                  :rules="[(v) => !!v || 'Digite um nome']"
                  label="Nome"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.email"
                  :rules="[
                    (v) => /.+@.+\..+/.test(v) || 'Digite um e-mail válido',
                    ok ? ok : 'E-mail já cadastrado',
                  ]"
                  label="E-mail"
                  type="email"
                  @keyup="valid = true"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.password"
                  :rules="[
                    (v) => !!v || 'Digite uma senha',
                    (v) => v.length >= 6 || 'Min 6 caracteres',
                  ]"
                  label="Senha"
                  type="password"
                  @keyup="valid = true"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.rpassword"
                  :rules="[
                    usrForm.password === usrForm.rpassword ||
                      'Digite a senha corretamente',
                    (v) => v.length >= 6 || 'Min 6 caracteres',
                  ]"
                  label="Confirme a senha"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="primary" @click="createUser"
              >Cadastrar</v-btn
            >
<alerts :alert="alert" />
            <v-card-text />
          </v-card>
          <alerts :alert="alert" />
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import axios from 'axios';
import alerts from '../alerts.vue';

export default {
  name: 'Signup',
  components: {
    alerts,
  },
  data() {
    return {
      alert: {
        active: null,
        color: null,
        text: null,
        timeout: null,
        x: null,
        y: null,
      },
      valid: true,
      ok: true,
      usrForm: {
        name: '',
        email: '',
        company: '',
        password: '',
        rpassword: '',
      },
    };
  },
  computed: {},

  watch: {},
  methods: {
    async createUser() {
      if (
        this.usrForm.name.length === 0
        || this.usrForm.email.length === 0
        || this.usrForm.password.length === 0
        || this.usrForm.rpassword.length === 0
      ) {
        this.$refs.form.validate();
      } else {
        await axios
          .post('user', {
            name: this.usrForm.name,
            password: this.usrForm.password,
            email: this.usrForm.email,
          })
          .then(() => {
            setTimeout(() => {
              this.$router.push('/');
            }, 4000);
            this.ok = true;
            this.alert = {
              active: true,
              color: 'success',
              text: 'Redirecionando para a tela de login...',
              top: 'top',
            };
          })
          .catch(() => {
            this.ok = false;
          });
      }
    },
    async createOwner() {
      if (
        this.usrForm.name.length === 0
        || this.usrForm.email.length === 0
        || this.usrForm.company.length === 0
        || this.usrForm.password.length === 0
        || this.usrForm.rpassword.length === 0
      ) {
        this.$refs.form.validate();
      } else {
        await axios
          .post('user', {
            name: this.usrForm.name,
            password: this.usrForm.password,
            email: this.usrForm.email,
          })
          .then(async (res) => {
            await axios.post('company', {
              name: this.usrForm.company,
              user: res.data.raw.insertId,
            });

            setTimeout(() => {
              this.$router.push('/');
            }, 4000);
            this.ok = true;
            this.alert = {
              active: true,
              color: 'success',
              text: 'Redirecionando para a tela de login...',
              top: 'top',
            };
          })
          .catch(() => {
            this.ok = false;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
