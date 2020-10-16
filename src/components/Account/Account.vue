<template>
      <v-sheet color="grey lighten-4" class="pa-4">
          <v-avatar color="secondary" size="43">
            <span class="white--text">
              {{ getInitials(profile.name) }}
            </span>
          </v-avatar>

        <div class="text--primary">{{ profile.name }}</div>
        <div class="text--primary">{{ profile.company[0].name }}</div>
      </v-sheet>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Counter',
  async created() {
    await this.teste();
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.items,
    }),
  },
  methods: {
    ...mapActions(['teste']),
    // ...mapMutations(['setProfile']),
    getInitials(name) {
      const lastspace = name.lastIndexOf(' ');
      const firstname = name.charAt(0);
      const lastname = name.substring(lastspace + 1, lastspace + 2);

      if (lastspace > 0) {
        this.lastname = name.substring(lastspace + 1, lastspace + 2);
      }
      return (firstname + lastname).toUpperCase();
    },
  },
};
</script>
