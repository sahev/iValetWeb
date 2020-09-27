<template>
    <v-app id="inspire" transition="scale-transition">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8" height="350">
            <v-toolbar color="primary" dark flat height="100">
              <v-toolbar-title>iValet - Atualizar senha</v-toolbar-title>
            </v-toolbar>
            <v-container>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    v-model="p1"
                    :rules="[
                      (v) => v.length >= 6 ||  'Min 6 caracteres'
                    ]"
                    label="Senha"
                    type="password"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="p2"
                    :rules="[
                      p1 === p2 || 'Digite a senha corretamente',
                    ]"
                    label="Confirmar senha"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-container>
            <v-btn color="primary" @click="alterP" :disabled="!valid"
              >Alterar</v-btn
            >
          </v-card>
          <alert :alert="alert" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import alert from '../../components/alerts.vue';

export default {
  name: 'ResetPassword',
  components: {
    alert,
  },
  data() {
    return {
      valid: true,
      p1: '',
      p2: '',
      alert: {
        active: false,
        color: '',
        text: '',
        top: '',
      },
    };
  },
  methods: {
    alterP() {
      const { hash } = this.$route.query;
      this.$refs.form.validate();
      if (this.p1 === this.p2) {
        axios.put('/user/update-password/me', {}, {
          params: {
            hash: hash.replaceAll(' ', '+'),
            password: this.p1,
          },
        });
        this.alert = {
          active: true,
          color: 'success',
          text: 'Senha alterada. Voltando para o login...',
          top: 'top',
        };
        setTimeout(() => {
          this.$router.push('/');
        }, 3000);
      }
    },
  },
};
</script>

<style>

</style>
