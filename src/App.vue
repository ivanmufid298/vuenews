<template>
  <v-app id="app">
    <v-app id="nav">
      <!-- <router-link :to="{ path: '/' }">Semua Berita</router-link> -->
    </v-app>
    <p></p>
    <router-view />
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  text-align: center;
}
</style>
