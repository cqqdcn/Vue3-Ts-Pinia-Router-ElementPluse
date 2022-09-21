import path from 'path'
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

/**
 * @description 路由配置简介（💢没有使用动态路由，路由全部配置在本地，需要使用动态路由请自行改造）
 * @param path ==> 路由路径
 * @param name ==> 路由名称
 * @param redirect ==> 路由重定向
 * @param component ==> 路由组件
 * @param meta ==> 路由元信息
 * @param meta.requireAuth ==> 是否需要权限验证
 * @param meta.keepAlive ==> 是否需要缓存该路由
 * @param meta.title ==> 路由标题
 * @param meta.key	==> 路由key,用来匹配按钮权限
 * */

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'Login' }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  // 首页
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    redirect: '/home/index',
    children: [
      {
        path: "/home/index",
        name: "home",
        component: () => import('@/pages/home/Home.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "首页",
          key: "home"
        }
      }
    ]
  },
  // 超级表单
  {
    path: '/form',
    component: () => import('@/layout/index.vue'),
    redirect: '/form/hooksform',
    meta: {
      title: "超级表格"
    },
    children: [
      {
        path: "/form/hooksform",
        name: "hooksform",
        component: () => import('@/pages/supform/hooksform/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "使用 Hooks",
          key: "hooksform"
        }
      },
      {
        path: "/form/componentform",
        name: "componentform",
        component: () => import('@/pages/supform/componentform/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "使用 Componentform",
          key: "componentform"
        }
      }
    ]
  },
  // 数据可视化
  {
    path: '/echarts',
    component: () => import('@/layout/index.vue'),
    redirect: '/echarts/echartsForm',
    meta: {
      title: "数据可视化"
    },
    children: [
      {
        path: "/echarts/echartsForm",
        name: "echartsForm",
        component: () => import('@/pages/echarts/echartsForm/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "可视化表",
          key: "echartsForm"
        }
      },
      {
        path: "/echarts/newpage",
        name: "newpage",
        component: () => import('@/pages/echarts/newpage/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "内嵌页面",
          key: "newpage"
        }
      }
    ]
  },
  // From表单
  {
    path: '/text',
    component: () => import('@/layout/index.vue'),
    redirect: '/text/textFrom1',
    meta: {
      title: "表单 From"
    },
    children: [
      {
        path: "/text/textFrom1",
        name: "textFrom1",
        component: () => import('@/pages/fromUi/fromText/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "超级 From",
          key: "textFrom1"
        }
      },
      {
        path: "/text/textFrom2",
        name: "textFrom2",
        component: () => import('@/pages/fromUi/fromEg/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "基础 From",
          key: "textFrom2"
        }
      },
      {
        path: "/text/textFrom3",
        name: "textFrom3",
        component: () => import('@/pages/fromUi/editor/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "基础 Editor",
          key: "textFrom3"
        }
      }
    ]
  },
  {  
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    component: () => import('@/pages/login/Login.vue'),
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, form, next) => {
  // to表示将要访问的路径
  // form表示从那个页面跳转而来
  // next表示允许跳转到指定位置
  if (to.path === '/Login') return next()
  // 获取用户本地的token, 如果token不存在则跳转到登录页
  const tokenStr = localStorage.getItem("token")
  if (!tokenStr) return next('/Login')
  next()
})

export default router
