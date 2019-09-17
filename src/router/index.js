import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import shop from '@/pages/Home/shop'
import shopCart from '@/pages/Cart/cart'
import checkout from '@/pages/Checkout/checkout'
import goods from '@/pages/Goods/goods'
import detail from '@/pages/Goods/goodsdetail'
import User from '@/pages/User/user'
import order from '@/pages/User/list'
import service from '@/pages/User/service'
import ticket from '@/pages/User/ticket'
import address from '@/pages/User/address'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home',
      component:index,
      children:[{path:'home',component:shop},
       {path:'goods',component:goods},
       {path:'goodsDetail',component:detail}
       ]
    },
   {
    path: '/cart',
    name: 'cart',
    component: shopCart
   },
   {
     path:'/user',
     name:'user',
     component:User,
     redirect:'/user/order',
     children:[
      {path:'order',component:order},
      {path:'service',component:service},
      {path:'ticket',component:ticket},
      {path:'address',component:address}
     ]
   },
   {
    path:'/checkout',
    name:'checkout',
    component:checkout
   }
  ]
})
