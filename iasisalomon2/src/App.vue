<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">IASISALOMON: BITVUE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="link" to="/">Bitcoin Converter</router-link>
      <router-link class="link" to="candles">Candlesticks Graph</router-link>
    </div>
  </div>
</nav>
 <div class="row" >
  <router-view/>
 </div>
</div>
</div>
</template>

<style scoped>
.link {
margin-right: 10px;
}
.navbar {
  border-bottom: 2px solid black;
}
</style>