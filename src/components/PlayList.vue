<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
      <v-col cols="12" md="4" sm="4" xs="12">
        <div v-if="playList.length === 0">
          <v-alert dense text type="info" class="mt-5">
            Que tal si seleccionas tus canciones favoritas
          </v-alert>
          <div class="text-center">
            <v-btn
              class="mx-2"
              small
              fab
              dark
              color="grey darken-3"
              @click="selectSongs = true"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </div>
        <v-card elevation="2" outlined v-if="playList.length > 0" class="p-3">
          <v-list shaped dense class="list">
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in playList" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        @click="selectTrack(item)"
                      >
                        {{ item.iconPlay }}
                      </v-icon>
                    </template>
                    <span>Reproducir</span>
                  </v-tooltip>
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
      </v-col>
      <v-col cols="12" md="4" sm="4" xs="12"></v-col>
    </v-row>
    <v-dialog scrollable v-model="selectSongs" width="300">
      <v-card>
        <v-card-title class="grey lighten-2">
          <h4>🎵🎵🎵🎵🎵</h4>
        </v-card-title>
        <v-card-text class="mt-5">
          <v-file-input
            outlined
            dense
            multiple
            v-model="files"
            @change="upload"
            accept=".mp3"
            class="mt-5"
            label="Selecciona tus caciones"
          ></v-file-input>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { CANCIONES } from "@/demo";
export default {
  name: "PlayList",

  data: () => ({
    files: [],
    playList: [],
    selectSongs: false,
    selectedItem: 1,
  }),
  created() {
    // this.playList = CANCIONES;
    console.log(CANCIONES);
  },

  methods: {
    upload() {
      this.playList = [];
      for (const p of this.files) {
        const sound = {
          name: p.name.slice(0, -4),
          size: p.size,
          type: p.type,
          src: URL.createObjectURL(p),
          iconPlay: "mdi-play-box",
          iconQueue: "mdi-playlist-music",
        };
        this.playList.push(sound);
      }
      this.selectSongs = false;
    },
    selectTrack(item) {
      this.$emit("select", item);
    },
    addToQueue(item) {
      console.log(item);
    },
  },
};
</script>
<style scoped>
.list {
  max-height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
