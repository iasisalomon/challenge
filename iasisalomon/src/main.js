import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import "jquery";
import "popper.js";
import "bootstrap";
import "./assets/app.css"
Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')
