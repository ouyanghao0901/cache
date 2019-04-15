import Vue from 'vue'
import Router from 'vue-router'

import goods from '@/components/goods/Goods'
import seller from '@/components/seller/Seller'
import ratings from '@/components/ratings/Ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/goods'},
    {path:'/goods',name:'goods',component:goods},
    {path:'/seller',name:'seller',component:seller},
    {path:'/ratings',name:'ratings',component:ratings},
  ],
  linkActiveClass:"active"
})
