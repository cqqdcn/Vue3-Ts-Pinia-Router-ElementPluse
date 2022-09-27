import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style/reset.scss'
import App from './App.vue'
// 引入全局路由
import router from './router/index'
// element icons
import * as Icons from "@element-plus/icons-vue"
// Element 样式
// import "element-plus/theme-chalk/el-message.css";

// 进度条
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

// 全局引入可视化大屏UI
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(DataVVue3)
app.use(router)
app.use(createPinia())
app.mount('#app')
