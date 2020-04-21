import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      primary: "#607d8b",
      secondary: "#009688",
      accent: "#2196f3",
      error: "#f44336",
      warning: "#ff5722",
      info: "#00bcd4",
      success: "#4caf50",
    },
  },
});
