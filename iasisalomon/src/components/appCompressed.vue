<template>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th v-for="header in tableHeader" v-bind:key="header" scope="col">{{ header }} </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(values, key, index) in coins" v-bind:key="key.id">
      <th scope="row">{{ key }} {{index}} </th>
      <td v-for=" (coin, key, index) in coins[key]" v-bind:key="coin.id">{{ coin }} {{index}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default {
  data() {
    return {
      'tableHeader':['Code','Buy','Sell','15 Minutes', 'Last', 'Symbol'],
      'coins':{},
      'bestcoins':{}
    }
  },
created(){
this.$http.get('https://blockchain.info/ticker')
.then((data)=>{
this.coins = data.body
this.bestcoins = data.body
})
}
}
</script>
<style scoped>
</style>