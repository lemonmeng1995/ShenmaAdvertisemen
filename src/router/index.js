import Vue from 'vue'
import Router from 'vue-router'
import Vant from "vant"
import 'vant/lib/index.css';


Vue.use(Router)
Vue.use(Vant);

const Home = r => require.ensure([], () => r(require('../components/home/index')), 'index')
const Index = r => require.ensure([], () => r(require('../components/index')), 'index')

const Briefintroduction = r => require.ensure([], () => r(require('../components/briefintroduction/index')), 'index') //简介
const Dynamiccom = r => require.ensure([], () => r(require('../components/dynamiccom/index')), 'index')  //动态
const Freecreation = r => require.ensure([], () => r(require('../components/freecreation/index')), 'index') //免费创建

const Product = r => require.ensure([], () => r(require('../components/product/index')), 'index') // 产品
const Productdetails = r => require.ensure([], () => r(require('../components/product/productdetails')), 'index') // 产品



const router= new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // redirect: '/index/home',
      meta: {
        isLogin: false,
        title: '名片'
      },
        //  children:[
        //   {
        //     path: '/index/home',
        //     name: 'Index',
        //     component: Index,
        //     meta: {
        //       title: '名片'
        //     }
        //   }, 
        //   {
        //     path: '/briefintroduction',
        //     name: 'Briefintroduction',
        //     component: Briefintroduction,
        //     meta: {
        //       title: '简介'
        //     }
        //   }, 
        //   {
        //     path: '/product',
        //     name: 'Product',
        //     component: Product,
        //     meta: {
        //       title: '产品'
        //     }
        //   }, 
        //   {
        //     path: '/dynamiccom',
        //     name: 'Dynamiccom',
        //     component: Dynamiccom,
        //     meta: {
        //       title: '动态'
        //     }
        //   }, 
        // ],
    },
    // {
    //   path: '/index/home',
    //   name: 'Index',
    //   component: Index,
    //   meta: {
    //     title: '名片'
    //   }
    // }, 
    {
      path: '/briefintroduction',
      name: 'Briefintroduction',
      component: Briefintroduction,
      meta: {
        title: '简介'
      }
    }, 
    {
      path: '/freecreation',
      name: 'Freecreation',
      component: Freecreation,
      meta: {
        title: '免费创建'
      }
    }, 
    
    {
      path: '/product',
      name: 'Product',
      component: Product,
      meta: {
        title: '产品'
      }
    }, 
       {
      path: '/productdetails',
      name: 'Productdetails',
      component: Productdetails,
      meta: {
        title: '产品详情'
      }
    }, 
    
    {
      path: '/dynamiccom',
      name: 'Dynamiccom',
      component: Dynamiccom,
      meta: {
        title: '动态'
      }
    }, 

  ],
  mode:"history"
})

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// })

export default router
