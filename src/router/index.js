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


const Manhome = r => require.ensure([], () => r(require('../components/managementCom/manhome')), 'index') // 产品

const Productman = r => require.ensure([], () => r(require('../components/managementCom/productman')), 'index') // 产品

const Banner = r => require.ensure([], () => r(require('../components/managementCom/banner')), 'index') // 产品

const Procategory = r => require.ensure([], () => r(require('../components/managementCom/procategory')), 'index') // 产品


const Catrelease = r => require.ensure([], () => r(require('../components/managementCom/catrelease')), 'index') // 产品


const Propublish = r => require.ensure([], () => r(require('../components/managementCom/propublish')), 'index') // 产品





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
    },
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
    {
      path: '/manhome',
      name: 'Manhome',
      component: Manhome,
      meta: {
        title: '产品管理'
      }
    },
    {
      path: '/productman',
      name: 'Productman',
      component: Productman,
      meta: {
        title: '产品管理'
      }
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner,
      meta: {
        title: '产品Banner管理'
      }, 
    },
    {
      path: '/procategory',
      name: 'Procategory',
      component: Procategory,
      meta: {
        title: '产品类别管理'
      },
    },
    {
    path: '/catrelease',
    name: 'Catrelease',
    component: Catrelease,
    meta: {
      title: '产品类别发布'
    },
  },
  {
    path: '/propublish',
    name: 'Propublish',
    component: Propublish,
    meta: {
      title: '新产品发布'
    },
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
