import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import register from '@/components/Register'
import menu from '@/components/Menu'
import admin from '@/components/Admin'
import about from '@/components/About/About'

//二级路由
import contact from '@/components/About/Contact'
import history from '@/components/About/History'
import orderguide from '@/components/About/Orderguide'
import delivery from '@/components/About/Delivery'

//三级路由
import phone from '@/components/About/contact/Phone'
import personname from '@/components/About/contact/Personname'


Vue.use(Router)
export default new Router({
  routes: [
    { path: "*", redirect: "/" },  //redirect
    {
      path: "/", name: "home", components: {
        default: home,
        orderguide,
        delivery,
        history
      }
    },
    { path: "/login", name: "login", component: login },
    { path: "/register", name: "register", component: register },
    { path: "/menu", name: "menu", component: menu },
    {
      path: "/admin", name: "admin", component: admin,
      //路由独享守卫
      // beforeEnter(to, from, next)  {
      //   alert("非登录状态不能访问此页面");
      //   next("/login");
      // }
    },
    {
      path: "/about", name: "about", component: about, redirect: "/contact", children: [
        {
          path: "/contact", name: "contact", component: contact, redirect: "/personname", children: [
            { path: "/phone", name: "phone", component: phone },
            { path: "/personname", name: "personname", component: personname }
          ]
        },
        { path: "/history", name: "history", component: history },
        { path: "/orderguide", name: "orderguide", component: orderguide },
        { path: "/delivery", name: "delivery", component: delivery }
      ]
    },
  ],
  // scrollBehavior(to,from,savePosition){
  //   // return {x:0,y:100}
  //   // return {selector:'.btn'}

  //   // if(savePosition){
  //   //   return savePosition
  //   // }else{
  //   //   return {x:0,y:0}
  //   // }
  // }
})


