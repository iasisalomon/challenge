<template>
  <div class="container" id="app">
    <appnavbar></appnavbar>
    <apptable></apptable>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
import appTable from './components/appTable.vue'

export default {
  components: {
    'appnavbar':appNavbar,
    'apptable':appTable,
  }
}
</script>

<style>
</style>
