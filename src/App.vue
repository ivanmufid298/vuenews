<template>
  <v-app>
    <NavbarBerita />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarBerita from "@/components/NavbarBerita.vue";
export default {
  components: { NavbarBerita },
};
</script>
