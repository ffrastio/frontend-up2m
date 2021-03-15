<template>
  <div class="about">
      <Navbar/>
      <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>