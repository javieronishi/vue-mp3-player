<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="8">
        <v-autocomplete
          dense
          placeholder="Buscar ....."
          prepend-icon="mdi-text-search"
          :items="items"
          no-data-text="No existen canciones"
          v-model="search"
          item-text="name"
          item-value="id"
          @change="handleSelectionTrack"
          item-color="primary"
        ></v-autocomplete>
      </v-col>
      <v-col md="4" class="text-right">
        <v-btn small icon class="cyan--text mr-2" @click="clearPlayList">
          <v-icon>mdi-playlist-remove</v-icon>
        </v-btn>
        <v-btn small icon class="cyan--text mr-2" @click="viewQueue">
          <v-icon>mdi-playlist-play</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="400">
        <v-card outlined class="bgsecondary">
          <v-card-title class="text-h6 bgprimary white--text">
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
            <v-simple-table dense class="bgsecondary">
              <template v-slot:default>
                <tbody>
                  <tr v-for="(item, i) in queue" :key="i">
                    <td>{{ i + 1 }} - {{ item.name }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
    playList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dialog: false,
      items: this.playList,
      search: null,
    };
  },
  methods: {
    clearPlayList() {
      this.$emit("clear-play-list");
    },
    viewQueue() {
      this.dialog = true;
    },
    handleSelectionTrack() {
      this.$nextTick(() => {
        this.$emit("play-search", this.items[this.search]);
        this.search = null;
      });
    },
  },
};
</script>
