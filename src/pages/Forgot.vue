<template>
  <v-app id="inspire" transition="scale-transition">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8" height="300">
            <v-toolbar color="primary" dark flat height="100">
              <v-toolbar-title>iValet - Recuperar senha</v-toolbar-title>
            </v-toolbar>
            <v-container>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    v-model="email"
                    :rules="[
                      (v) => /.+@.+\..+/.test(v) || 'Digite um e-mail válido',
                      blank ? blank : 'E-mail é obrigatório',
                    ]"
                    label="E-mail"
                    type="email"
                    @keyup="blank = true"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-container>
            <v-btn color="primary" @click="sendMail" :disabled="!valid"
              >Enviar</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'Forgot',
  data() {
    return {
      valid: true,
      blank: true,
      email: null,
    };
  },
  methods: {
    sendMail() {
      if (this.email === null) {
        this.$refs.form.validate();
        this.blank = false;
      } else {
        console.log('email > ', this.email);
      }
    },
  },
};
</script>
