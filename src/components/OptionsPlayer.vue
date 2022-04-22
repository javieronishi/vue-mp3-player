<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn small icon @click="clearPlayList">
          <v-icon>mdi-delete-sweep</v-icon>
        </v-btn>
        <v-btn small icon @click="viewQueue">
          <v-icon>mdi-playlist-music</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="340">
        <v-card outlined>
          <v-card-title class="text-h6 grey darken-1 white--text">
            Cola de Reproducción
          </v-card-title>
          <v-card-text class="mt-4">
            <v-alert
              dense
              text
              border="left"
              type="info"
              color="white black--text"
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
              color="white black--text"
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
    },
  },
};
</script>
