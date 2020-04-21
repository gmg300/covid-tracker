<template>
  <v-app style="background: #263238">
    <v-app-bar
      app
      dark
      src="./assets/covid-banner.jpg"
      height="100"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <div class="d-flex align-center">
        <h1>Covid-19 Tracker</h1>
      </div>
    </v-app-bar>

    <v-content>
      <Tracker />
    </v-content>
  </v-app>
</template>

<script>
import Tracker from "./components/Tracker";

export default {
  name: "App",

  components: {
    Tracker,
  },

  data: () => ({
    //
  }),
};
</script>
