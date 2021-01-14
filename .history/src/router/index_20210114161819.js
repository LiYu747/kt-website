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
        component: Home,
        meta:{
          title:'首页'
        }
      },
      //  关于我们
      {
        path: '/aboutUs',
        name: 'aboutus',
        component: () => import('../views/aboutus/AboutUs.vue'),
      },
       
      // 产品中心
      {
        path: '/about/faceRecognition',
        name: 'About',
        component:  () =>  import('../views/about/About.vue'),
       
        children:[
          // 人脸识别
          {
            path: '/about/faceRecognition',
            name: 'FaceRecognition',
            component: () => import ('../views/product/FaceRecognition.vue'),
            meta:{
              title:'产品中心'
            },
          },
          // 翼闸
          {
            path: '/about/wingBrake',
            name: 'WingBrake',
            component: () => import ('../views/product/WingBrake.vue'),
            meta:{
              title:'产品中心'
            },
          },
          //  摆闸
          {
            path: '/about/pendulumBrake',
            name: 'pendulumBrake',
            component: () => import ('../views/product/PendulumBrake'),
            meta:{
              title:'产品中心'
            },
          },
          // 三辊闸
          {
            path: '/about/threeGates',
            name: 'threeGates',
            component: () => import ('../views/product/ThreeGates.vue'),
            meta:{
              title:'产品中心'
            },
          },
           // 平移闸
           {
            path: '/about/panBrake',
            name: 'panBrake',
            component: () => import ('../views/product/PanBrake'),
            meta:{
              title:'产品中心'
            },
          },
           // 全高通闸
           {
            path: '/about/qualcommBrake',
            name: 'qualcommBrake',
            component: () => import ('../views/product/QualcommBrake'),
            meta:{
              title:'产品中心'
            },
          },
            // 立柱
            {
              path: '/about/standColumn',
              name: 'standColumn',
              component: () => import ('../views/product/StandColumn'),
              meta:{
                title:'产品中心'
              },
            },
        ]
      }
    ]
  },
   //  联系我们
   {
    path: '/contactUs',
    name: 'contactus',
    component: () => import('../views/contactus/ContactUs.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
