<template>
  <div class="container-fluid">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th v-for="header in tableHeader" v-bind:key="header" scope="col">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">USD</th>
          <td>{{ USD.symbol }} {{ USD.buy }}</td>
          <td>{{ USD.symbol }} {{ USD.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">AUD</th>
          <td>{{ AUD.symbol }} {{ AUD.buy }}</td>
          <td>{{ AUD.symbol }} {{ AUD.sell }}</td>
        </tr>
        <tr>
          <th scope="row">BRL</th>
          <td>{{ BRL.symbol }} {{ BRL.buy }}</td>
          <td>{{ BRL.symbol }} {{ BRL.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">CAD</th>
          <td>{{ CAD.symbol }} {{ CAD.buy }}</td>
          <td>{{ CAD.symbol }} {{ CAD.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">CHF</th>
          <td>{{ CHF.symbol }} {{ CHF.buy }}</td>
          <td>{{ CHF.symbol }} {{ CHF.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">CLP</th>
          <td>{{ CLP.symbol }} {{ CLP.buy }}</td>
          <td>{{ CLP.symbol }} {{ CLP.sell }}</td>
        </tr>
        <tr>
          <th scope="row">CNY</th>
          <td>{{ CNY.symbol }} {{ CNY.buy }}</td>
          <td>{{ CNY.symbol }} {{ CNY.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">DKK</th>
          <td>{{ DKK.symbol }} {{ DKK.buy }}</td>
          <td>{{ DKK.symbol }} {{ DKK.sell }}</td>
        </tr>
        <tr>
          <th scope="row">EUR</th>
          <td>{{ EUR.symbol }} {{ EUR.buy }}</td>
          <td>{{ EUR.symbol }} {{ EUR.sell }}</td>
        </tr>
        <tr>
          <th scope="row">GBP</th>
          <td>{{ GBP.symbol }} {{ GBP.buy }}</td>
          <td>{{ GBP.symbol }} {{ GBP.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">HKD</th>
          <td>{{ HKD.symbol }} {{ HKD.buy }}</td>
          <td>{{ HKD.symbol }} {{ HKD.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">INR</th>
          <td>{{ INR.symbol }} {{ INR.buy }}</td>
          <td>{{ INR.symbol }} {{ INR.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">ISK</th>
          <td>{{ ISK.symbol }} {{ ISK.buy }}</td>
          <td>{{ ISK.symbol }} {{ ISK.sell }}</td>
        </tr>
        <tr>
          <th scope="row">JPY</th>
          <td>{{ JPY.symbol }} {{ JPY.buy }}</td>
          <td>{{ JPY.symbol }} {{ JPY.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">KRW</th>
          <td>{{ KRW.symbol }} {{ KRW.buy }}</td>
          <td>{{ KRW.symbol }} {{ KRW.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">NZD</th>
          <td>{{ NZD.symbol }} {{ NZD.buy }}</td>
          <td>{{ NZD.symbol }} {{ NZD.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">PLN</th>
          <td>{{ PLN.symbol }} {{ PLN.buy }}</td>
          <td>{{ PLN.symbol }} {{ PLN.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">RUB</th>
          <td>{{ RUB.symbol }} {{ RUB.buy }}</td>
          <td>{{ RUB.symbol }} {{ RUB.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">SEK</th>
          <td>{{ SEK.symbol }} {{ SEK.buy }}</td>
          <td>{{ SEK.symbol }} {{ SEK.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">SGD</th>
          <td>{{ SGD.symbol }} {{ SGD.buy }}</td>
          <td>{{ SGD.symbol }} {{ SGD.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">THB</th>
          <td>{{ THB.symbol }} {{ THB.buy }}</td>
          <td>{{ THB.symbol }} {{ THB.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">TRY</th>
          <td>{{ TRY.symbol }} {{ TRY.buy }}</td>
          <td>{{ TRY.symbol }} {{ TRY.sell }}</td>
        </tr>
        <tr v-if="long">
          <th scope="row">TWD</th>
          <td>{{ TWD.symbol }} {{ TWD.buy }}</td>
          <td>{{ TWD.symbol }} {{ TWD.sell }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="row">
        <a v-on:click="long = !long" class="nav-link col text-center">
          Show More>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableHeader: ["Code", "Buy", "Sell"],
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
      long: false
    };
  },
  computed: {},
  created() {
    fetch("https://blockchain.info/ticker")
      .then(response => response.json())
      .then(info => {
        this.USD = info.USD;
        this.AUD = info.AUD;
        this.BRL = info.BRL;
        this.CAD = info.CAD;
        this.CHF = info.CHF;
        this.CLP = info.CLP;
        this.CNY = info.CNY;
        this.DKK = info.DKK;
        this.EUR = info.EUR;
        this.GBP = info.GBP;
        this.HKD = info.HKD;
        this.INR = info.INR;
        this.ISK = info.ISK;
        this.JPY = info.JPY;
        this.KRW = info.KRW;
        this.NZD = info.NZD;
        this.PLN = info.PLN;
        this.RUB = info.RUB;
        this.SEK = info.SEK;
        this.SGD = info.SGD;
        this.THB = info.THB;
        this.TRY = info.TRY;
        this.TWD = info.TWD;
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped></style>`
