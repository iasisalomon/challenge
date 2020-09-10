<template>
  <div>
    <h3 id="converter-title">Buy Crypto with Credit or Debit Card</h3>
    <div id="input-group-1" class="input-group input-group-lg">
      <div class="input-group-prepend">
        <select v-model="calc.select" 
        class="input-group-text" 
        id="inputGroup-sizing-lg">
          <option
            v-for="coin in coinslabel"
            v-bind:key="coin"
            class="dropdown-item"
            >{{ coin }}</option
          >
        </select>
      </div>
      <input
        v-model="calc.coininput"
        v-on:change="pairci"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
    <div id="input-group-2" class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">BTC</span>
      </div>
      <input
        v-model="calc.btcinput"
        v-on:change="pairbtci"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
    <button id="buy-now" type="button" class="btn btn-primary btn-lg align-self-center">Buy Now</button>
    <p>{{calc.coininput}}</p>
    <p>{{calc.btcinput}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calc:{
        select:"USD",
        coininput:"",
        btcinput:""
      },
      coinslabel: {},
      USD: {},
      AUD: {},
      BRL: {},
      CAD: {},
      CHF: {},
      CLP: {},
      CNY: {},
      DKK: {},
      EUR: {},
      GBP: {},
      HKD: {},
      INR: {},
      ISK: {},
      JPY: {},
      KRW: {},
      NZD: {},
      PLN: {},
      RUB: {},
      SEK: {},
      SGD: {},
      THB: {},
      TRY: {},
      TWD: {},
    };
  },
  methods: {
    pairci: function(){
        
      if (this.calc.coininput != this.calc.btcinput)
        this.calc.btcinput = this.calc.coininput
    },
        pairbtci: function(){
      if (this.calc.btcinput != this.calc.coininput)
        this.calc.coininput = this.calc.btcinput
        return this.calc.btcinput
    }
  },
  computed: {
    coinConverter: function(){
      return this.calc.select.last
    }
  },
  created() {
    this.$http.get("https://blockchain.info/ticker").then((data) => {
      this.coinslabel = Object.keys(data.body);
      this.USD = data.body.USD;
      this.AUD = data.body.AUD;
      this.BRL = data.body.BRL;
      this.CAD = data.body.CAD;
      this.CHF = data.body.CHF;
      this.CLP = data.body.CLP;
      this.CNY = data.body.CNY;
      this.DKK = data.body.DKK;
      this.EUR = data.body.EUR;
      this.GBP = data.body.GBP;
      this.HKD = data.body.HKD;
      this.INR = data.body.INR;
      this.ISK = data.body.ISK;
      this.JPY = data.body.JPY;
      this.KRW = data.body.KRW;
      this.NZD = data.body.NZD;
      this.PLN = data.body.PLN;
      this.RUB = data.body.RUB;
      this.SEK = data.body.SEK;
      this.SGD = data.body.SGD;
      this.THB = data.body.THB;
      this.TRY = data.body.TRY;
      this.TWD = data.body.TWD;
    });
  },
};
</script>
<style scoped>
#inputGroup-sizing-lg {
width: 100px;
}
#converter-title{
margin: 10px auto;
}
#input-group-1{
margin: 40px auto;
}
#input-group-2{
margin: 40px auto;
}
</style>
