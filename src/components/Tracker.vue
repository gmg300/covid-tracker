<template>
  <v-container fluid>
    <v-row>
      <v-col class="mb-2" cols="12">
        <div class="border text-center white--text">
          <h3 class="pa-5">Search Bar</h3>
        </div>
      </v-col>
      <v-col class="mb-2" cols="12">
        <div class="border text-center white--text">
          <h3 class="pa-5">Total Cases</h3>
        </div>
      </v-col>
      <v-col class="mb-2" cols="12">
        <div class="border text-center white--text">
          <h3 class="pa-5">Total Deaths</h3>
        </div>
      </v-col>
      <v-col class="mb-2" cols="12">
        <div class="border text-center white--text">
          <h3 class="pa-5">Total Recovered</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Tracker',

    data: () => ({
      
    }),
  }
</script>

<style scoped>
  .border {
    border: 1px solid rgba(128,208,199,1);
    border-radius: 10px;
  }
</style>
