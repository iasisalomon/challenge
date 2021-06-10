## EMDX Front End technical test

### Summary
The goal of this test is to make you code a small VueJS app.

The app will have two views, BTC to fiat currency conversor, and a small dashboard with a graphic view. Each view can be acceded via a link in a top navbar at the top of the app. The top navbar should read "Bitcoin converter" and "Candlesticks graphic"

#### BTC Converter view
The BTC view will contain a table with all the available exchanges with code, symbol and latest price. Also a calculator with an input for a value, a currency selector and a button to get the value in BTC.

You must use this (https://blockchain.info/ticker ) API to get the exchanges and convert the amount to BTC (back and forth).


#### Candlesticks graphic view

The Candlesticks graphic should have an OHLCV chart (we recommend trading-vue-js) and it should be filled with proper formatted data. An example source can be:
