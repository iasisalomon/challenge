<template>
  <div class="container" id="app">
    <appnavbar></appnavbar>
    <div class="row">
    <component class="col-6" v-bind:is="rendered"></component>
    <component class="col-6" v-bind:is="rendered"></component>
    </div>
  </div>
</template>

<script>
import appNavbar from './components/appNavbar.vue'
import appTable from './components/appTable.vue'

export default {
  components: {
    'appnavbar':appNavbar,
    'apptable':appTable,
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
