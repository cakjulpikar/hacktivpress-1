<template lang="html">
  <div class="hero is-primary">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div v-if='isLogin === false' class="nav-right nav-menu">
            <input v-model='usernameLogin' class="input nav-item login-form" type="text" placeholder="Username">
            <input v-model='passwordLogin' class="input nav-item login-form" type="password" placeholder="Password">
            <button class="button navBtn" type="button"> Login </button>
            <button class="button navBtn" type="button" name="button"> <router-link to="/users/signup">  Sign Up </router-link></button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      usernameLogin: '',
      passwordLogin: ''
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    logIn: function () {
      var self = this
      axios.post('localhost:3000/api/users/signin', {
        username: self.usernameLogin,
        password: self.passwordLogin
      })
      .then(function (loginResult) {
        self.$store.commit('isLogin', true)
        window.localStorage.setItem('token', loginResult.data.token)
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
  .login-form {
    width: 15%;
    margin: 0.5%;
  }
  .navBtn {
    margin: 0.5%
  }
</style>
