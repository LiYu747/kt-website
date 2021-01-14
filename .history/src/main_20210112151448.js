import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'
import Video from 'video.js'

import 'video.js/dist/video-js.css'

import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
Vue.use(Video)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
