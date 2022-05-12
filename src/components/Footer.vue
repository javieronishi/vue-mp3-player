<template>
  <v-footer dark padless fixed>
    <v-card flat tile class="bgsecondary white--text text-center flex">
      <v-card-text class="cyan--text caption pa-1">
        Reproductor <code class="white--text">mp3</code> simple y elegante para
        el navegador.
        <code class="white--text">Vue.js</code>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "FooterPlayer",
  data: () => ({
    icons: ["mdi-twitter", "mdi-github"],
  }),
};
</script>
