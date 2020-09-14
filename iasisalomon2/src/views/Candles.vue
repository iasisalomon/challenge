<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>Candlesticks Graph BTC/USD 1h</h1>
    </div>
    <div class="row justify-content-center">
      <appCandle class="graph"></appCandle>
    </div>
  </div>
</template>

<script>
import appCandle from "../components/appCandle";

export default {
  name: "Candle",
  components: {
    appCandle
  }
};
</script>

<style scoped>
.graph {
  margin: 15px;
}
</style>
