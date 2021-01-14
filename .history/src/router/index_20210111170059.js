import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    
      {
        path: '/about/faceRecognition',
        name: 'About',
        component:  () =>  import('../views/about/About.vue'),
        children:[
          {
            path: '/about/faceRecognition',
            name: 'FaceRecognition',
            component: () => import ('../views/product/FaceRecognition.vue')
          },
          {
            path: '/about/wingBrake',
            name: 'WingBrake',
            component: () => import ('../views/product/WingBrake.vue')
          }
        ]
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
