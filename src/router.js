import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import Weather from './views/Weather.vue'
import Base from './views/base.vue'
import Saolei from './views/saolei.vue'
import Bmi from './views/bmi.vue'

Vue.use(Router);
 //默认导出
export default new Router({
  routes: [
    {
      // (推荐)写法一 上面先import
      path: '/',
      name: 'home',
      component: Home
    },
    // 示例
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/base',
      name: 'base',
      component: Base
    },
    {
      path: '/saolei',
      name: 'saolei',
      component: Saolei
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: Bmi
    },

  ],

})