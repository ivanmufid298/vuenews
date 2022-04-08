import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const dataPers = createPersistedState({
  state: ["listBerita", "OneBerita"],
});
export default new Vuex.Store({
  plugins: [dataPers],
  state: {
    listBerita: [],
    OneBerita: [],
    category: "",
    search: "",
    listCategories: [
      {
        nama: "business",
        gambar: "https://source.unsplash.com/1000x300/?business",
      },
      {
        nama: "entertainment",
        gambar: "https://source.unsplash.com/1000x300/?entertainment",
      },
      {
        nama: "general",
        gambar: "https://source.unsplash.com/1000x300/?general",
      },
      {
        nama: "health",
        gambar: "https://source.unsplash.com/1000x300/?health",
      },
      {
        nama: "science",
        gambar: "https://source.unsplash.com/1000x300/?science",
      },
      {
        nama: "sports",
        gambar: "https://source.unsplash.com/1000x300/?sports",
      },
      {
        nama: "technology",
        gambar: "https://source.unsplash.com/1000x300/?technology",
      },
    ],
  },
  getters: {},
  mutations: {
    setBerita(state, payload) {
      state.listBerita = payload.articles;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    },

    setOneBerita(state, payload) {
      state.oneBerita = state.listBerita.find(
        (item) =>
          item.title
            .toLowerCase() // LowerCase
            .replace(/\s+/g, "-") // space to -
            .replace(/&/g, `-and-`) // & to and
            .replace(/--/g, `-`) == payload
      );
    },
  },
  actions: {
    fetchListBerita(store, payload) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=99da639dc1ce4117912c24440c9ecf6d` +
            payload +
            `&apiKey=2418fb5a837a4ad69a6de201af5e0e35`
        )
        .then((response) => {
          store.commit("setBerita", response.data);
        });
    },

    getBerita(store, slug) {
      store.commit("setOneBerita", slug);
    },
    getCategory(store, category) {
      store.commit("setCategory", category);
    },
    getSearch(store, payload) {
      store.commit("setSearch", payload);
    },
  },
  modules: {},
});
