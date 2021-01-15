import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'
import BaiduMap from 'vue-baidu-map';
Vue.config.productionTip = false
Vue.use(VueVideoPlayer)
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'bgB1y9zSNdFt8eWmYbV29vbzgZfMIx7x'
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
