<template>
  <div>
    <v-snackbar
      v-model="alert.active"
      :color="alert.color"
      :left="alert.x === 'left'"
      :right="alert.x === 'right'"
      :timeout="alert.timeout"
      :top="alert.top === 'top'"
      :vertical="alert.mode === 'vertical'"
    >
     {{ alert.text }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "alerts",
  props: {
    alert: {
      active: Boolean,
      color: String,
      text: String,
      timeout: Number,
      x: String,
      top: String,
      mode: String
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>