<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].bgprimary }">
    <AudioPlayer :track="track" :autoplay="autoplay" />
    <PlayList @select="playMusic" />
    <Footer />
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
    <v-btn color="bgsecondary white--text mt-1" absolute right fab small @click="goGithub">
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import PlayList from "@/components/PlayList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { AudioPlayer, PlayList, Footer },
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
    goGithub() {
      window.location.href = "https://github.com/javieronishi/vue-mp3-player"
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
