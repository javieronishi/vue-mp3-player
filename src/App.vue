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
              label="Seleciona tus caciones"
              v-model="files"
              @change="hola"
              accept=".mp3"
              class="mt-5"
            ></v-file-input>
          </v-col>
          <v-col sm="6">
            <div v-if="play">
              <audio controls :src="src"></audio>
            </div>
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
    play: false,
    src: null,
  }),

  methods: {
    hola() {
      this.src = URL.createObjectURL(this.files[0]);
      console.log(this.src);
      this.play = true;
    },
  },
};
</script>
