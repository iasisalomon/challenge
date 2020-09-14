<template>
  <div class="graph">
    <div class="container">
      <div class="row justify-content-center">
        <appCandle class="col-12" ></appCandle>
    </div>
  </div>
</div>
</template>

<script>
import appCandle from '../components/appCandle'

export default {
  name: "Candle",
  components: {
    appCandle,
  }
};
</script>
