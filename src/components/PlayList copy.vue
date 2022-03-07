<template>
  <v-container fluid class="grey lighten-1">
    <v-row no-gutters>
      <v-col md="4" sm="4" xs="12"></v-col>
      <v-col md="4" sm="4" xs="12">
        <v-file-input
          outlined
          dense
          multiple
          label="Seleciona tus cacionesss"
          v-model="files"
          @change="upload"
          accept=".mp3"
          class="mt-5"
        ></v-file-input>
        <v-list dense v-if="playList.length > 0">
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in playList"
              :key="i"
              @dblclick="selectTrack(item)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col md="4" sm="4" xs="12"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PlayList",

  data: () => ({
    files: [],
    playList: [],
  }),

  methods: {
    upload() {
      this.playList = [];
      for (const p of this.files) {
        const sound = {
          name: p.name,
          size: p.size,
          type: p.type,
          src: URL.createObjectURL(p),
          icon: "mdi-music-box-outline",
        };
        this.playList.push(sound);
      }
    },
    selectTrack(item) {
      this.$emit("select", item);
    },
  },
};
</script>
