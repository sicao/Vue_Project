import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import GetSecKillList from '@/components/GetSecKillList'
import AllKind from '@/components/AllKind'
import Seek from '@/components/Seek'
import Sign from '@/components/Sign'
import Transportation from '@/components/Transportation'
import Man from '@/components/Man'
import Woman from '@/components/Woman'

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
    },
    {
      path: '/allKind',
      component: AllKind
    },
    {
      path: '/seek',
      component: Seek
    },
    {
      path: '/sign',
      component: Sign
    },
    {
      path: '/transportation',
      component: Transportation
    },
    {
      path: '/man',
      component: Man
    },
    {
      path: '/woman',
      component: Woman
    }
  ]
})
