<template>
  <v-container>
    <v-card outlined class="p-0">
      <v-card-text class="text-center">
        <v-row justify="center">
          <v-col md="6" sm="6" xs="12">
            <v-btn small icon @click="previousTrack">
              <v-icon>mdi-skip-previous</v-icon>
            </v-btn>
            <v-btn small icon @click="stopTrack">
              <v-icon>mdi-stop</v-icon>
            </v-btn>
            <v-btn small icon @click="nextTrack">
              <v-icon>mdi-skip-next</v-icon>
            </v-btn>
          </v-col>
          <v-col md="6" sm="6" xs="12">
            <v-btn small icon @click="clearPlayList">
              <v-icon>mdi-delete-sweep</v-icon>
            </v-btn>
            <v-btn small icon @click="viewQueue">
              <v-icon>mdi-playlist-music</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-switch
          v-model="$vuetify.theme.dark"
          inset
          hint="Theme Dark"
          dense
          persistent-hint
        ></v-switch> -->
      </v-card-text>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="340">
        <v-card outlined>
          <v-card-title class="text-h6 blue-grey">
            Cola de Reproducción
          </v-card-title>
          <v-card-text class="mt-4">
            <v-alert
              dense
              text
              border="left"
              type="info"
              v-if="queue.length === 0"
            >
              Cola de reproducción vacia
            </v-alert>
            <p v-else class="text-caption" v-for="(item, i) in queue" :key="i">
              {{ item.name }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              elevation="2"
              outlined
              raised
              small
              color="primary"
              @click="dialog = false"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "OptionsPlayer",
  props: {
    queue: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    clearPlayList() {
      this.$emit("clear-play-list");
    },
    viewQueue() {
      this.dialog = true;
      console.log(this.queue);
    },
    nextTrack() {
      this.$emit("next");
    },
    previousTrack() {
      this.$emit("previous");
    },
    stopTrack() {
      this.$emit("stop");
    },
  },
};
</script>
