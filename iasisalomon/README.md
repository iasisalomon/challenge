# iasisalomon

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
  created() {
    this.$http.get('https://cors-anywhere.herokuapp.com/https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist').then((data) => {
        this.ohlcv = data.body
    });
