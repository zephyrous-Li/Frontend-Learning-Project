
# vue2-learn

## 说明
学习的代码片段会以子组件的形式出现在本项目中，包含对应的单元测试

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 具体内容

### src-api
远程网络请求相关
1. request.js
   axios在VUE中的应用，创建axios请求并使用响应拦截器进行错误统一处理，并封装为request方法暴露给全局
2. test.js
   上述方法的对应测试代码

### src-components
1. Avatar
   一个全局的头像公共组件，父子通讯（父传子）的例子
2. Pager
      一个全局的页码组件，父子通讯的例子
### src-directives
自定义指令
  1. loading
   loading指令配置, 操作真实dom，使用原生js或jQuery
### src-mixins
vue2组件混入事例
1. fetchData
   提供一个加载中，调取数据，加载完成配置的公共组件，使用组件混入的方式进行使用
### src-mock
前后端同时开发时，使用mockjs进行请求的拦截和假数据
### src-router
vue2路由配置相关
### src-styles
使用less编写的公共样式库，并提供了色彩配置
### src-views
页面组件
### src-vite.config
进行了开发阶段跨域时，进行的代理配置
### src-eventBus
事件总线相关
