<template>
  <div id="app">
    <navbar></navbar>
    <router-link to="articles/showall"> Show All Article </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
