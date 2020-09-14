<template>
  <div id="app">
    <div class="container">
      <div  id="nav" class="row nav nav-pills justify-content-center">
        <router-link class="nav-item" to="/">Bitcoin Converter</router-link>
        <router-link to="candles">Candlesticks Graph</router-link>
      </div>
    <div class="row" >
        <router-view />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>