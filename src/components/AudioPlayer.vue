<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="4" sm="6" xs="12">
        <audio
          controls
          :src="track.src"
          :autoplay="autoplay"
          @ended="onEnd()"
          id="audio-player"
        ></audio>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    track: {
      type: Object,
      default: function () {
        return { id: null, src: null, name: null, snackbar: false };
      },
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$vuetify.theme.dark = true;

    this.$bus.$on("stop-track", () => {
      this.stop();
    });
    this.$bus.$on("play-track", () => {
      this.play();
    });
    this.$bus.$on("pause-track", () => {
      this.pause();
    });
  },
  methods: {
    onEnd() {
      this.$bus.$emit("next-track", this.track);
    },
    stop() {
      const audio = document.getElementById("audio-player");
      audio.pause();
      audio.currentTime = 0;
    },
    play() {
      const audio = document.getElementById("audio-player");
      audio.play();
    },
    pause() {
      const audio = document.getElementById("audio-player");
      audio.pause();
    },
  },
};
</script>
<style scoped>
audio {
  width: 100%;
}
</style>
