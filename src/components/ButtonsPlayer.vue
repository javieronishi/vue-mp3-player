<template>
  <v-row>
    <v-col class="mb-3 text-center">
      <v-btn
        class="ml-2"
        small
        color="bgsecondary white--text"
        fab
        @click="previousTrack"
      >
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        small
        color="bgsecondary white--text"
        fab
        @click="stopTrack"
      >
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        small
        color="bgsecondary white--text"
        fab
        @click="playTrack"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        small
        color="bgsecondary white--text"
        fab
        @click="pauseTrack"
      >
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        small
        color="bgsecondary white--text"
        fab
        @click="nextTrack"
      >
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
