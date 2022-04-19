<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="6" sm="6" xs="12">
        <audio
          controls
          :src="track.src"
          :autoplay="autoplay"
          @ended="onEnd()"
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
  },
  methods: {
    onEnd() {
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
