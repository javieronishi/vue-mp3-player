<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4" xs="12">
        <!-- <v-switch
          v-model="$vuetify.theme.dark"
          inset
          hint="Theme Dark"
          dense
          persistent-hint
        ></v-switch> -->
      </v-col>
      <v-col cols="12" md="4" sm="4" xs="12">
        <marquee v-if="track.src">
          <span class="text-caption">
            {{ track.name }}
          </span>
        </marquee>
        <audio
          controls
          :src="track.src"
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
  data: () => ({}),

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
