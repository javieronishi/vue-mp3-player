<template>
  <v-container>
    <v-card outlined class="p-0">
      <v-card-text class="text-center">
        <v-btn small icon @click="clearPlayList">
          <v-icon>mdi-delete-sweep</v-icon>
        </v-btn>
        <v-btn small icon @click="viewQueue">
          <v-icon>mdi-playlist-music</v-icon>
        </v-btn>
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
        <v-card outlined flat>
          <v-card-title class="text-h5">Cola de Reproducción</v-card-title>
          <v-card-text>
            <p class="text-caption" v-for="(item, i) in queue" :key="i">
              {{ item.name }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn x-small color="primary" @click="dialog = false">
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
  },
};
</script>
