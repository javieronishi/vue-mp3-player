<template>
  <v-app>
    <AudioPlayer :src="src" :autoplay="autoplay" />
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
  }),

  methods: {
    playMusic(item) {
      this.src = item.src;
      this.autoplay = true;
    },
  },
};
</script>
