<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].bgprimary }">
    <AudioPlayer :track="track" :autoplay="autoplay" />
    <PlayList @select="playMusic" />
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="white black--text"
      dense
      top
      right
    >
      {{ track.name }}
      <template v-slot:action="{ attrs }">
        <v-btn
          small
          color="black"
          icon
          @click="snackbar = false"
          v-bind="attrs"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import PlayList from "@/components/PlayList.vue";

export default {
  name: "App",
  components: { AudioPlayer, PlayList },
  data() {
    return {
      src: null,
      autoplay: false,
      track: {},
      snackbar: false,
      timeout: 4000,
    };
  },

  methods: {
    playMusic(item) {
      this.track = {
        id: item.id,
        src: item.src,
        name: item.name,
      };
      this.autoplay = true;
      this.snackbar = true;
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
