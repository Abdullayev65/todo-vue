<template>
  <div class="container">

    <Navbar/>

    <RouterView/>

  </div>
</template>

<script>
import {RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,RouterView
  },
  mounted() {
    this.$store.dispatch('getUserMe')
        .catch(() => {
          this.$router.push({name: "login"})
        })

  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}


nav a:first-of-type {
  border: 0;
}


</style>
