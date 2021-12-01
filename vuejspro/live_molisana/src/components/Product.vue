<template>
  <div>
    <img :src="image" alt="" />
    <h3>{{ titolo }}</h3>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default {
  props: {
    image: String,
    titolo: String,
  },
};
</script>

<style lang="scss">
</style>