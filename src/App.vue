<template>
  <v-app>
    <AudioPlayer :track="track" :autoplay="autoplay" />
    <PlayList @select="playMusic" />
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
  }),

  methods: {
    playMusic(item) {
      this.track = {
        id: item.id,
        src: item.src,
        name: item.name,
      };
      this.autoplay = true;
    },
  },
};
</script>
