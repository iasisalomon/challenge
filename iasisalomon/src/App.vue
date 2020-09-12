<template>
  <div class="container" id="app">
    <appnavbar></appnavbar>
    <div class="row">
    <component class="col-6" v-bind:is="apptable"></component>
    <component class="col-6" v-bind:is="appcalc"></component>
    </div>
    <div class="row">
    <component v-bind:is="appcandle"></component>
    </div>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
import appTable from './components/appTable.vue'
import appCalc from './components/appCalc.vue'
import appCandle from './components/appCandle.vue'

export default {
  components: {
    'appnavbar':appNavbar,
    'apptable':appTable,
    'appcalc':appCalc,
    'appcandle':appCandle,
  },
  data(){
    return {
      apptable:'apptable',
      appcalc:'appcalc',
      appcandle:'appcandle',
    }
  }
}
</script>
<style>
</style>
