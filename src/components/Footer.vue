<template>
  <v-footer dark padless fixed>
    <v-card flat tile class="bgsecondary white--text text-center flex">
      <v-card-text class="white--text caption pa-1">
        Reproductor <code>mp3</code> simple y elegante para el navegador. <code>Vue.js</code>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-twitter", "mdi-github"],
  }),
};
</script>
