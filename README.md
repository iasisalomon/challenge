## EMDX Front End technical test

### Summary
The goal of this test is to make you code a small VueJS app.

The app will have two views, BTC to fiat currency conversor, and a small dashboard with a graphic view. Each view can be acceded via a link in a top navbar at the top of the app. The top navbar should read "Bitcoin converter" and "Candlesticks graphic"

#### BTC Converter view
The BTC view will contain a table with all the available exchanges with their, code, symbol and latest price and of calculator with an input for a value, a currency selector and a button to get the value in BTC.

You must use this (https://blockchain.info/ticker ) API to get the exchanges and convert the amount to BTC (back and forth).


#### Candlesticks graphic view

The Candlesticks graphic should have an OHLCV chart (we recommend trading-vue-js) and it should be filled with proper formatted data. An example source can be:

https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist

### Submission

Fork this repository and send us a pull request with your code.
* Put the code within a folder named as your github/bitbucket username. 
* Add a readme file with the steps to run the app. 

We'll review it and get back to you in order to talk about the submission

### Optional
* If you are able to set up and (in any view) show real time information from a websocket of any source, it will be highly considered in the overall review.

### Extra points

* Use a component library (We recommend Vuetify).
* Responsive design (Grid system, Flexbox, CSS Grid).
* Add test cases to components.




Contact us at  [jobs@emdx.io](mailto:jobs@emdx.io)  if you need more details.
