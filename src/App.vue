<template>
  <v-app>
    <template>
      <v-container class="grey lighten-5">
        <v-row>
          <v-col sm="6">
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
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in playList"
                  :key="i"
                  @click="playMusic(item)"
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
          <v-col sm="6">
            <audio controls :src="src" :autoplay="autoplay"></audio>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    files: [],
    src: null,
    playList: [],
    autoplay: false,
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
          icon: 'mdi-music-box-outline'
        }
        this.playList.push(sound);
      }
    },
    playMusic(item){
      this.src = item.src;
      this.autoplay = true;
    }
  },
};
</script>
