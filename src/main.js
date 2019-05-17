import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'
import Meta from 'vue-meta'
import VideoBg from 'vue-videobg'
import inViewportDirective from 'vue-in-viewport-directive'


const options = {
  key: 'pk_test_ZU5n2XpVg6W59UWV3zPq7ca9',
  // image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'GBP',
  billingAddress: false,
  panelLabel: 'Purchase {{amount}}'
}

Vue.use(VueStripeCheckout, options);
Vue.component('video-bg', VideoBg)
Vue.use(vueScrollto)
Vue.directive('in-viewport', inViewportDirective)
Vue.use(Meta)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
