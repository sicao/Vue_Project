import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import GetSecKillList from '@/components/GetSecKillList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    //商品秒杀页面List
    {
      path: '/getSecKillList',
      component: GetSecKillList
    }
  ]
})
