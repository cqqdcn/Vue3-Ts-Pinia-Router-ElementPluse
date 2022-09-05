下载依赖：npm insatll

运行:npm run dev

## Vue2 与 Vue3 的区别

`Vue3`由于完全由`TS`进行重写，在应用中对类型判断的定义和使用有很强的表现。同一对象的多个键返回值必须通过定义对应的接口（`interface`）来进行类型定义。要不然在 ESLint 时都会报错。

`vue2` 的双向数据绑定是利用 `ES5` 的一个 `API Object.definePropert()`对数据进行劫持 结合 `发布订阅`模式的方式来实现的。`Vue3` 中使用了 `es6` 的 `ProxyAPI` 对数据代理。

`Vue3`支持碎片(`Fragments`)

Vue2 与 Vue3 最大的区别: Vue2 使用`Options API`而 Vue3 使用的`Composition API`

生命周期钩子变化:

```js
Vue2 ~~~~~~~~~~~ vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
```

## 介绍 vite

> Vite：下一代前端开发与构建工具

- 💡 极速的开发服务器启动
- ⚡️ 轻量快速的热模块重载（HMR）
- 🛠️ 丰富的功能
- 📦 自带优化的构建
- 🔩 通用的插件接口
- 🔑 完全类型化的 API

`Vite` （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。

它主要由两部分组成：

- 一个开发服务器，它基于 原生 `ES` 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

- 一套构建指令，它使用 `Rollup` 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。

- Vite 意在提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的`可扩展性`，并有完整的类型支持。
