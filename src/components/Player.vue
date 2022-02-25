<template>
  <v-file-input
    multiple
    label="File input"
    v-model="items"
    @change="hola"
    accept=".mp3"
  ></v-file-input>
</template>

<script>

export default {
  name: 'LocalPlayer',

  components: {},

  data: () => ({
    items: [],
  }),
  methods: {
    hola() {
      console.log(this.items);
    },
  },
};
</script>
