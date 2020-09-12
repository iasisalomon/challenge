<template>
<div>
<p> {{ohlcv}} </p>
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
    created(){
        this.$http.get('https://cors-anywhere.herokuapp.com/https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist')
        .then((data) => {
            this.ohlcv = data.body.sort(
                function(a, b) {
                if (a[0] < b[0]) return -1;
                    if (a[0] > b[0]) return 1;
                        return 0;
        })
    })
}
}

</script> 