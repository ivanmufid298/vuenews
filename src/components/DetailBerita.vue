<template>
  <div style="margin: 0 250px">
    <img
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
      <button>
        <router-link :to="{ path: '/' }">Kembali</router-link>
      </button>
    </div>
  </div>
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
<style scoped>
a {
  font-weight: bold;
  text-decoration: none;
}
</style>
