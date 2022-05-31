<template>
  <v-row>
    <v-col class="mb-3 text-center">
      <v-btn
        class="ml-2"
        small
        color="primary"
        fab
        @click="previousTrack"
        outlined
      >
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn class="ml-2" small color="primary" fab @click="stopTrack" outlined>
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn class="ml-2" small color="primary" fab @click="playTrack" outlined>
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        small
        color="primary"
        fab
        @click="pauseTrack"
        outlined
      >
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn class="ml-2" small color="primary" fab @click="nextTrack" outlined>
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "OptionsPlayer",
  props: {
    queue: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    nextTrack() {
      this.$emit("next");
    },
    previousTrack() {
      this.$emit("previous");
    },
    stopTrack() {
      this.$bus.$emit("stop-track");
    },
    playTrack() {
      this.$bus.$emit("play-track");
    },
    pauseTrack() {
      this.$bus.$emit("pause-track");
    },
  },
};
</script>
