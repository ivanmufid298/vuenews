<template>
  <div id="listBerita">
    <h1 class="my-5">Berita Terkini</h1>
    <v-layout row class="mx-10">
      <v-container
        v-for="berita in listBerita"
        :key="berita.id"
        flex
        xs12
        sm6
        md4
        lg3
      >
        <v-card elevation="2" outlined shaped>
          <v-img :src="berita.urlToImage" max-height="150" />

          <v-card-subtitle>
            By <b>{{ berita.author }}</b> -
            <p>
              {{ moment(berita.publishedAt).locale("id").format("LLLL") }}
            </p>
          </v-card-subtitle>
          <h4 class="text-center px-3">{{ berita.title }}</h4>
          <v-card-text>
            {{ berita.description }}
          </v-card-text>
          <v-btn
            class="primary mb-5"
            small
            :to="{
              name: 'Detail Berita',
              params: { slug: toSlug(berita.title) },
            }"
            >Lihat selengkapnya
          </v-btn>
        </v-card>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$store.state.search;
    },
    listBerita() {
      return this.$store.state.listBerita.filter((item) => {
        return item.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
  methods: {
    fetchBerita(value) {
      this.$store.dispatch("fetchListBerita", value);
    },
    toSlug(value) {
      value = value
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`);
      return value;
    },
  },
  mounted() {
    this.fetchBerita(this.$store.state.category);
  },
};
</script>
<style scoped>
#listBerita {
  text-align: center;
}
</style>
