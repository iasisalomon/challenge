<template>
  <div>
    <h3 id="converter-title">Buy Crypto with Credit or Debit Card</h3>
    <div id="input-group-1" class="input-group input-group-lg">
      <div class="input-group-prepend">
        <select
          v-model="calc.select"
          class="input-group-text"
          id="inputGroup-sizing-lg"
        >
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
    <button
      id="buy-now"
      type="button"
      class="btn btn-primary btn-lg align-self-center"
    >
      Buy Now
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calc: {
        select: "USD",
        coininput: "",
        btcinput: ""
      },
      coinslabel: {},
      coins: {}
    };
  },
  methods: {
    pairci: function() {
      if (
        Number(this.calc.coininput) /
          this.coins.filter(key => key[0].match(this.calc.select))[0][1].buy !=
        this.calc.btcinput
      )
        this.calc.btcinput =
          Number(this.calc.coininput) /
          this.coins.filter(key => key[0].match(this.calc.select))[0][1].buy;
    },
    pairbtci: function() {
      if (
        this.coins.filter(key => key[0].match(this.calc.select))[0][1].sell *
          Number(this.calc.btcinput) !=
        this.calc.coininput
      )
        this.calc.coininput =
          this.coins.filter(key => key[0].match(this.calc.select))[0][1].sell *
          Number(this.calc.btcinput);
    }
  },
  computed: {},
  coincalc: function() {},
  created() {
    fetch("https://blockchain.info/ticker")
      .then(response => response.json())
      .then(info => {
        this.coins = Object.entries(info);
        this.coinslabel = Object.keys(info);
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped>
#inputGroup-sizing-lg {
  width: 100px;
}
#converter-title {
  margin: 10px auto;
}
#input-group-1 {
  margin: 40px auto;
}
#input-group-2 {
  margin: 40px auto;
}
</style>
