<template>
<div>
<trading-vue :data="this.$data"></trading-vue>
</div>
</template>
<script>
 
import TradingVue from 'trading-vue-js'
 
export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            ohlcv: [],
        }
    },
  created() {
		fetch("https://cors-anywhere.herokuapp.com/https://api-pub.bitfinex.com/v2/candles/trade:1h:tBTCUSD/hist?limit=120&sort=1")
			.then(response => response.json())
			.then(info => {
            this.ohlcv = info.map(a=>{
            return [a[0],a[1],a[3],a[4],a[2],a[5]]
        })
		})
		.catch(error => console.log(error))
  },
}
</script> 