<template>
  <div id="app">
    <div class="container">
      <div class="nav nav-pills nav-justified">
        <router-link class="nav-item" to="/">Bitcoin Converter</router-link>
        <router-link class="nav-item" to="candles">Candlesticks Graph</router-link>
      </div>
    <div class="row" >
        <router-view />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>