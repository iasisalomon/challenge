<template>

</template>
<script>

export default {
  data() {
    return {
      'USD':{},
      'AUD':{},
      'BRL':{},
      'CAD':{},
      'CHF':{},
      'CLP':{},
      'CNY':{},
      'DKK':{},
      'EUR':{},
      'GBP':{},
      'HKD':{},
      'INR':{},
      'ISK':{},
      'JPY':{},
      'KRW':{},
      'NZD':{},
      'PLN':{},
      'RUB':{},
      'SEK':{},
      'SGD':{},
      'THB':{},
      'TRY':{},
      'TWD':{},
    }
  },
  computed: {

  },
created(){
this.$http.get('https://blockchain.info/ticker')
.then((data)=>{
this.USD = data.body.USD
this.AUD = data.body.AUD
this.BRL = data.body.BRL
this.CAD = data.body.CAD
this.CHF = data.body.CHF
this.CLP = data.body.CLP
this.CNY = data.body.CNY
this.DKK = data.body.DKK
this.EUR = data.body.EUR
this.GBP = data.body.GBP
this.HKD = data.body.HKD
this.INR = data.body.INR
this.ISK = data.body.ISK
this.JPY = data.body.JPY
this.KRW = data.body.KRW
this.NZD = data.body.NZD
this.PLN = data.body.PLN
this.RUB = data.body.RUB
this.SEK = data.body.SEK
this.SGD = data.body.SGD
this.THB = data.body.THB
this.TRY = data.body.TRY
this.TWD = data.body.TWD
})
}
}
</script>
<style scoped>
</style>`