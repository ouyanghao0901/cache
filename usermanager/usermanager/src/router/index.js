import Vue from 'vue'
import Router from 'vue-router'
import customers from '@/components/customers'
import about from '@/components/about'
import adduser from '@/components/adduser'
import customersdetail from '@/components/customersDetail'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'customers',component:customers},
    {path:'/about',name:'about',component:about},
    {path:'/adduser',name:'adduser',component:adduser},
    {path:'/customersdetai/:id',name:'customersdetail',component:customersdetail},
    {path:'/edit/:id',name:'edit',component:edit},

  ]
})
