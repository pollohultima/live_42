<template>
  <div class="container">
    <SearchBox :searchString="searchText" @search-character="search" />

    <div class="row">
      <div class="col-md-3" v-for="character in characters" :key="character.id">
        <div class="character">
          <img
            class="rounded-circle"
            :src="character.image"
            :alt="character.name"
          />
          <h3>{{ character.name }}</h3>
          <p>{{ character.origin }}</p>
          <p>{{ character.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBox from "./SearchBox.vue";
export default {
  components: { SearchBox },

  data() {
    return {
      characters: [],
      searchText: "",
    };
  },
  mounted() {
    axios
      .get("https://api.sampleapis.com/rickandmorty/characters")
      .then((r) => {
        this.characters = r.data;
      });
  },

  methods: {
    search(text) {
      console.log(text);
      const filteredEl = this.characters.filter((character) => {
        return character.name.includes(text);
      });
      this.characters = filteredEl;
    },
  },
};
</script>

<style>
</style>