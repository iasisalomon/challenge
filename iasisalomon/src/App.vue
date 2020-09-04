<template>
  <div id="app">
    <navbar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
}
</style>
