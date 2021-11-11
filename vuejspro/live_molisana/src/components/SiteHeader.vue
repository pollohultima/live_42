<template>
  <header id="site_header">
    <Logo />
    <!-- /.logo -->
    <nav class="main_menu">
      <a href="">Home</a>

      <a href="" class="active">Prodotti</a>

      <a href="">Chi Siamo</a>

      <a href="">Contatti</a>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
};
</script>

<style lang="scss">
#site_header {
  text-align: center;
  .main_menu {
    margin: 1.5rem 0;
    a {
      padding: 1rem;
      text-decoration: none;

      color: black;
      &.active {
        background: rgb(117, 165, 255);
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
