<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="6" sm="6" xs="12">
        <template v-if="playList.length === 0">
          <v-file-input
            outlined
            dense
            multiple
            v-model="files"
            @change="upload"
            accept=".mp3"
            label="Selecciona tus canciones favoritas"
          ></v-file-input>
        </template>
        <template v-if="playList.length > 0">
          <v-card outlined flat>
            <v-list shaped dense class="list">
              <v-list-item-group>
                <v-list-item v-for="(item, i) in playList" :key="i">
                  <v-list-item-content @click="selectTrack(item)">
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon @click="selectTrack(item)">
                      {{ item.iconPlay }}
                    </v-icon>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          @click="addToQueue(item)"
                          class="ml-2"
                        >
                          {{ item.iconQueue }}
                        </v-icon>
                      </template>
                      <span>Agregar a la cola</span>
                    </v-tooltip>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <marquee v-if="name">
            <span class="text-caption">
              {{ name }}
            </span>
          </marquee>
          <OptionsPlayer
            @clear-play-list="clearPlayList"
            :queue="playListQueue"
            @next="nextTrack"
            @previous="previousTrack"
            @stop="stopTrack"
          />
        </template>
      </v-col>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="success"
        dense
        class="text-caption"
      >
        Se agrego a la cola: {{ name }}
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
// import { CANCIONES } from "@/demo";
import OptionsPlayer from "@/components/OptionsPlayer.vue";
export default {
  name: "PlayList",
  components: { OptionsPlayer },
  data: () => ({
    files: [],
    playList: [],
    playListQueue: [],
    selectedItem: 0,
    name: null,
    snackbar: false,
    timeout: 3000,
  }),
  created() {
    // this.playList = CANCIONES;
    this.$bus.$on("next-track", (track) => {
      const nextId = this.playList.length === track.id + 1 ? 0 : track.id + 1;
      const next = this.playList[nextId];
      this.selectTrack(next);
    });
  },

  methods: {
    upload() {
      this.playList = [];
      let id = 0;
      for (const p of this.files) {
        const sound = {
          id,
          name: p.name.slice(0, -4),
          size: p.size,
          type: p.type,
          src: URL.createObjectURL(p),
          iconPlay: "mdi-play",
          iconQueue: "mdi-playlist-music",
        };
        this.playList.push(sound);
        id++;
      }
    },
    selectTrack(item) {
      if (this.playList.length > 0) {
        let play = item;
        if (this.playListQueue.length > 0) {
          play = this.playListQueue[0];
          this.playListQueue.shift();
        }
        this.$emit("select", play);
        this.name = play.name;
        this.selectedItem = play.id;
      }
    },
    nextTrack() {
      if (this.playList.length === this.selectedItem + 1) {
        this.selectTrack(this.playList[0]);
      } else {
        this.selectTrack(this.playList[this.selectedItem + 1]);
      }
    },
    previousTrack() {
      if (this.selectedItem === 0) {
        this.selectTrack(this.playList[this.playList.length - 1]);
      } else {
        this.selectTrack(this.playList[this.selectedItem - 1]);
      }
    },
    addToQueue(item) {
      this.playListQueue.push(item);
      this.name = item.name;
      this.snackbar = true;
    },
    clearPlayList() {
      this.playList = [];
      this.files = [];
    },
    stopTrack() {
      this.$emit("stop");
    },
  },
};
</script>
<style scoped>
.list {
  max-height: 410px;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
