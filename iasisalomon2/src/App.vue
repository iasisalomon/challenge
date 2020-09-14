<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <b-nav class="navbar col-12" pills>
        <b-nav-item v-bind:to="{}" active>Bitcoin converter</b-nav-item>
        <b-nav-item>Candlesticks graphic</b-nav-item>
      </b-nav>
      </div>

    <div class="row" >
        <router-view />
    </div>
  </div>
</div>
</template>

<style scoped>
.navbar {
  border-bottom: 2px solid black;
}
</style>