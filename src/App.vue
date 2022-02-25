<template>
  <v-app>
    <LocalPlayer/>
  </v-app>
</template>

<script>

import LocalPlayer from './components/Player.vue';

export default {
  name: 'App',

  components: { LocalPlayer },

  data: () => ({
    //
  }),
};
</script>
