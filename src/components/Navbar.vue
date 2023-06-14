<template>

  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">

    <a class="d-flex align-items-center text-decoration-none" @click="toHomeHandler">
      <h2>Todos</h2>
    </a>



    <div v-if="isLoggedIn">
      <div class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <div class="me-3 py-2 text-decoration-none my-text">
            @{{ user.name }}
          </div>
          <div class="me-3 py-2 text-decoration-none my-text"
               style="cursor: pointer"
               @click="logout">
            Logout
          </div>
        </nav>
      </div>

    </div>

    <template v-else>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink
            :to="{name: 'join'}"
            class="me-3 py-2 text-decoration-none my-btn"> Register
        </RouterLink>
        <RouterLink
            :to="{name: 'login'}"
            class="me-3 py-2 text-decoration-none my-btn"> Login
        </RouterLink>
      </nav>
    </template>


  </div>


</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    toHomeHandler() {
      return this.$router.push({name: "home"})
    },
    logout() {
      this.$store.dispatch('logout')
      return this.$router.push({name: "login"})
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth__user',
      isLoggedIn: 'auth__isLoggedIn',
      isAnonymous: 'auth__isAnonymous',
    }),
  },
}
</script>

<style scoped>
.my-text {
  margin-left: 7rem;
  float: left;
}

</style>