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
          // 人脸识别
          {
            path: '/about/faceRecognition',
            name: 'FaceRecognition',
            component: () => import ('../views/product/FaceRecognition.vue')
          },
          // 翼闸
          {
            path: '/about/wingBrake',
            name: 'WingBrake',
            component: () => import ('../views/product/WingBrake.vue')
          },
          //  摆闸
          {
            path: '/about/pendulumBrake',
            name: 'pendulumBrake',
            component: () => import ('../views/product/PendulumBrake')
          },
          // 三辊闸
          {
            path: '/about/threeGates',
            name: 'threeGates',
            component: () => import ('../views/product/ThreeGates.vue')
          },
           // 平移闸
           {
            path: '/about/panBrake',
            name: 'panBrake',
            component: () => import ('../views/product/PanBrake')
          },
           // 全高通闸
           {
            path: '/about/qualcommBrake',
            name: 'qualcommBrake',
            component: () => import ('../views/product/QualcommBrake')
          },
            // 立柱
            {
              path: '/about/standColumn',
              name: 'standColumn',
              component: () => import ('../views/product/StandColumn')
            },
        ]
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
