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
          <div class="nav-right nav-menu">
            <input class="input nav-item login-form" type="text" placeholder="Username">
            <input class="input nav-item login-form" type="password" placeholder="Password">
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return
    }
  }
}
</script>

<style lang="css">
  .login-form {
    width: 15%;
    margin: 0.5%;
  }
</style>
