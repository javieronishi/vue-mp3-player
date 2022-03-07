<template>
  <v-container fluid class="grey darken-3">
    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
      <v-col cols="12" md="4" sm="4" xs="12">
        <audio
          controls
          :src="src"
          :autoplay="autoplay"
          @ended="onEnd()"
        ></audio>
      </v-col>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: {
    src: {
      type: String,
      default: null,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  methods: {
    onEnd: function () {
      console.log("test on Ended");
    },
  },
};
</script>
<style scoped>
audio {
  width: 100%;
}
</style>
