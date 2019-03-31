import Vue from 'vue'
import Router from 'vue-router'
// @符号表示src目录
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import RealHome from '@/pages/home/RealHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'RealHome',
      component: RealHome
    }
  ]
})
