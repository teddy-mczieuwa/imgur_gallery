import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthHandler from '@/views/AuthHandler'
import ImageList from '@/views/ImageList'
import UploadForm from '@/views/UploadForm'


Vue.use(VueRouter)

const routes = [
  {path: '/', component: ImageList},
  {path: '/upload', component: UploadForm},
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
