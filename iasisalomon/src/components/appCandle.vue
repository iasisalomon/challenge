<template>
<!-- TradingVueJs 101 (example from 'Getting Started' ) -->

<trading-vue :data="chart" :width="this.width" :height="this.height"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText">
</trading-vue>
</template>
<script>
import TradingVue from 'trading-vue-js'

export default {
    name: 'app',
    components: { TradingVue },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }
    },
      created() {
    this.$http.get('https://cors-anywhere.herokuapp.com/https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist').then((data) => {
        this.chart = data.body
    })
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: [],
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            }
        }
    }
}
</script>