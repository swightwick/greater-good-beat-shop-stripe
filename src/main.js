import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'
import Meta from 'vue-meta'
import VideoBg from 'vue-videobg'
import inViewportDirective from 'vue-in-viewport-directive'
import VueAnalytics from 'vue-analytics'



const options = {
  key: 'pk_live_4h1TxMeMRveg77Sz1bgPjMSZ',
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
Vue.use(VueAnalytics, {
  id: 'UA-140625525-1'
})


new Vue({
  render: h => h(App)
}).$mount('#app')



