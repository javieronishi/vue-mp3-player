<template>
  <v-app>
    <AudioPlayer :track="track" :autoplay="autoplay" />
    <PlayList @select="playMusic" @stop="stopMusic" />
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="info"
      dense
      class="text-caption"
    >
      Reproduciendo: {{ track.name }}
    </v-snackbar>
  </v-app>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import PlayList from "@/components/PlayList.vue";

export default {
  name: "App",
  components: { AudioPlayer, PlayList },
  data: () => ({
    src: null,
    autoplay: false,
    track: {},
    snackbar: false,
    timeout: 4000,
  }),

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
    stopMusic() {
      console.log("excuchando");
      this.autoplay = false;
    },
  },
};
</script>
