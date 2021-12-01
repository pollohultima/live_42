<template>
  <div id="app">
    <SiteHeader title="Rick & Morty" />
    <SiteMain />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";

export default {
  name: "App",
  components: { SiteHeader, SiteMain },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

body {
  font-family: "Montserrat";
}
</style>
