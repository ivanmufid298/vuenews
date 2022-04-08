<template>
  <v-container>
    <v-img
      :src="oneNews.urlToImage"
      style="height: 30rem; width: 100%; display: block"
    />
    <h1 style="font-size: 30px">{{ oneNews.title }}</h1>
    <h3 style="font-size: 15px; color: rgb(114, 113, 113)">
      {{ oneNews.author }} -
      {{ moment(oneNews.publishedAt).locale("id").format("LLLL") }}
    </h3>
    <p style="font-size: 20px">{{ oneNews.content }}</p>
    <a :href="oneNews.url" target="_blank">Baca selengkapnya</a>
    <div>
      <v-btn class="secondary mr-5" @click="$router.back()">Kembali</v-btn>
      <v-btn :href="oneNews.url" target="_blank" class="blue darken-4"
        >Baca selengkapnya</v-btn
      >
    </div>
  </v-container>
</template>
<script>
export default {
  computed: {
    oneNews() {
      return this.$store.state.oneNews;
    },
  },
  methods: {
    getNews(slug) {
      this.$store.dispatch("getNews", slug);
    },
  },
  created() {
    this.getNews(this.$route.params.slug);
  },
};
</script>
<style scoped></style>
