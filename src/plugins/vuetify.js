import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import es from "vuetify/lib/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    theme: { dark: true },
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#007BFF",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        bgprimary: "#1F1F1F",
        bgsecondary: "#2F2F2F",
      },
      dark: {
        primary: "#00bcd4",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        bgprimary: "#15202b",
        bgsecondary: "#273340",
      },
    },
  },
  lang: {
    locales: { es },
    current: "es",
  },
});
