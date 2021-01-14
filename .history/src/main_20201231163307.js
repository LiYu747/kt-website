import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
