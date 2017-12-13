import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import GetSecKillList from '@/components/GetSecKillList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    //商品秒杀页面List
    {
      path: '/getSecKillList',
      component: GetSecKillList
    }
  ]
})
