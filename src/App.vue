<template>
  <v-app>
    <AudioPlayer :track="track" :autoplay="autoplay" />
    <PlayList @select="playMusic" />
    <OptionsPlayer />
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="info"
      top
      right
      class="text-caption"
    >
      {{ track.name }}
    </v-snackbar>
  </v-app>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import PlayList from "@/components/PlayList.vue";
import OptionsPlayer from "@/components/OptionsPlayer.vue";

export default {
  name: "App",
  components: { AudioPlayer, PlayList, OptionsPlayer },
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
  },
};
</script>
