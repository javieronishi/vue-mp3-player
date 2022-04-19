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
            v-if="selectSongs"
          ></v-file-input>
        </template>
        <template v-if="playList.length > 0">
          <marquee v-if="name">
            <span class="text-caption">
              {{ name }}
            </span>
          </marquee>
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
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { CANCIONES } from "@/demo";
export default {
  name: "PlayList",

  data: () => ({
    files: [],
    playList: [],
    playListQueue: [],
    selectSongs: true,
    selectedItem: 0,
    name: null,
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
      this.selectSongs = false;
    },
    selectTrack(item) {
      // buscar si hay algo en la cola
      let play = item;
      if (this.playListQueue.length > 0) {
        play = this.playListQueue[0];
        this.playListQueue.shift();
      }
      this.$emit("select", play);
      this.name = play.name;
    },
    addToQueue(item) {
      this.playListQueue.push(item);
      console.log(this.playListQueue.length);
      console.log(this.playListQueue);
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
