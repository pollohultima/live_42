<template>
  <div class="searchbox">
    <div class="mb-3">
      <input
        v-model="searchString"
        type="search"
        class="form-control"
        aria-describedby="helpId"
        placeholder="Search"
      />
    </div>
    <div class="mb-3">
      <button
        class="btn btn-warning"
        @click="$emit('search-character', searchString)"
      >
        Search
      </button>
      <button class="btn btn-primary" @click="$emit('resetList')">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchString: String,
  },
};
</script>

<style>
</style>