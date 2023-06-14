<template>

  <main class="form-signin w-25 m-auto">
    <form>
      <img class="mb-4" :src="logo" alt="" width="100">
      <h1 class="h3 mb-3 fw-normal">Please fill form</h1>

      <Input :label="'Email address'" :type="'email'" v-model="email"/>
      <Input :label="'Password'" :type="'password'" v-model="password"/>

      <Button type="submit"
              @click="submitHandler"
              :disabled="isLoading">
        Login
      </Button>
    </form>
  </main>

</template>

<script>
import Input from "@/ui-components/Input.vue";
import localStore from "@/helpers/persistaneStorage.js";

export default {
  components: {Input},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
      }

      this.$store.dispatch("login", data).then(user => {
        this.$router.push({name: 'home'})
      }).catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationErrs() {
      if (!this.$store.state.auth.err) {
        return false
      }
      const arr = {msg: this.$store.state.auth.err}
      return arr
    },

  },
}
</script>


<style scoped>

</style>