<template>
  <div id="listKategori">
    <h1 class="my-5 text-center">Kategori Berita</h1>
    <v-layout row class="mx-10">
      <v-container
        v-for="kategori in kategoriBerita"
        :key="kategori.id"
        flex
        xs12
        sm6
        md4
        lg3
      >
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="2" outlined shaped>
            <v-img :src="kategori.gambar" max-height="150" />
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#DBBAE8">
                <v-btn class="primary" small @click="fetchBerita(kategori.nama)"
                  >{{ kategori.nama }}
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    kategoriBerita() {
      return this.$store.state.listCategories;
    },
  },
  methods: {
    fetchBerita(value) {
      this.$store.dispatch("getkategori", value);
      this.$router.push({
        name: "Satu Kategori Berita",
        params: { kategori: value },
      });
    },
  },
};
</script>
<style scoped></style>
