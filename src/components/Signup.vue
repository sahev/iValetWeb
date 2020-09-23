<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4" size>
          <v-card class="elevation-8">
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
                  ]"
                  label="E-mail"
                  type="email"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.company"
                  :rules="[(v) => !!v || 'Digite o nome da empresa']"
                  label="Empresa"
                  type="text"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.password"
                  :rules="[
                    (v) => !!v || 'Digite uma senha',
                    (v) => v.length >= 6 || 'Mínimo 6 dígitos',
                  ]"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="usrForm.rpassword"
                  :rules="[
                    usrForm.password === usrForm.rpassword ||
                      'Digite a senha corretamente',
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

            <v-card-text />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      usrForm: {
        name: "",
        email: "",
        company: "",
        password: "",
        rpassword: "",
      },
    };
  },
  computed: {},

  watch: {},
  methods: {
    async createUser() {
      if (
        this.usrForm.name.length == 0 ||
        this.usrForm.email.length == 0 ||
        this.usrForm.company.length == 0 ||
        this.usrForm.password.length == 0
      ) {
        this.$refs.form.validate();
      } else {
        await axios.post("user", {
          name: this.usrForm.name,
          password: this.usrForm.password,
          email: this.usrForm.email
        }).then(async res => {
            await axios.post("company", {
              name: this.usrForm.company,
              user: res.data.raw.insertId
            })
          console.log(res);
    
        })
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
