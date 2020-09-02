<template>
  <div class="app" ref="container">
    <v-btn class="mx-2" fab dark small color="pink" @click="darkMode">
      <v-icon dark>mdi-theme-light-dark</v-icon>
    </v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  methods: {
    darkMode() {
      this.$refs.container.classList.toggle("dark-mode");
    },
  },
};
</script>
<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
.app {
  width: 100vw;
  height: 100vh;
  background-color: rgb(145, 198, 211);
}
.dark-mode {
  filter: invert(100%);
}
</style>
