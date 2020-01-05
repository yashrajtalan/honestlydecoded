import Vue from 'vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
import VueScrollProgress from './VueScrollProgress'
Vue.use(VueScrollProgressBar)

new Vue({
  el: '#app',
  render: (h) => h(VueScrollProgress)
})
