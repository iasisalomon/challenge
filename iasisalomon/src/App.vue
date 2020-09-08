<template>
  <div class="container" id="app">
    <appnavbar></appnavbar>
    <div class="row">
    <component class="col-6" v-bind:is="apptable"></component>
    <component class="col-6" v-bind:is="appcalc"></component>
    </div>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
import appTable from './components/appTable.vue'
import appCalc from './components/appCalc.vue'

export default {
  components: {
    'appnavbar':appNavbar,
    'apptable':appTable,
    'appcalc':appCalc,
  },
  data(){
    return {
      apptable:'apptable',
      appcalc:'appcalc'
    }
  }
}
</script>
<style>
</style>
