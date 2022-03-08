<template>
  <v-container fluid class="grey darken-3">
    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
      <v-col cols="12" md="4" sm="4" xs="12">
        <audio
          controls
          :src="track.src"
          :autoplay="autoplay"
          @ended="onEnd()"
        ></audio>
        <marquee v-if="track.src">
          <span class="white--text">🎼 🎼 {{ track.name }} 🎵</span>
        </marquee>
      </v-col>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
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
        return { id: null, src: null, name: null };
      },
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  methods: {
    onEnd() {
      console.log("emitido desde audio player");
      this.$bus.$emit("next-track", this.track);
    },
  },
};
</script>
<style scoped>
audio {
  width: 100%;
}
</style>
