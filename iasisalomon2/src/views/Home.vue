<template>
  <div class="home">
    <div class="container justify-content-center">
      <div class="row justify-content-center">
        <appCalc class="col-6" ></appCalc>
        <appTable class="col-6"></appTable> 
    </div>
  </div>
</div>
</template>

<script>

import appCalc from '../components/appCalc'
import appTable from '../components/appTable'

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    appCalc,
    appTable
  }
};
</script>