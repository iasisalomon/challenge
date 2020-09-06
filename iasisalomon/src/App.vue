<template>
  <div class="container" id="app">
    <appnavbar></appnavbar>
    <component class="col-6" v-bind:is="rendered"></component>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
import appTable from './components/appTable.vue'
import appCompressed from './components/appCompressed.vue'

export default {
  components: {
    'appnavbar':appNavbar,
    'apptable':appTable,
    'appcompressed':appCompressed,
  },
  data(){
    return {
      rendered:'apptable'
    }
  }
}
</script>
<style>
</style>
