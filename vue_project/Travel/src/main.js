// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 会自动查找App的文件
// .vue为单文件组件
import App from './App'
import router from './router'
// 引入css样式资源 
// import './assets/styles/reset.css'
// import './assets/styles/border.css'
// 解决移动端300ms点击延迟
import fastclick from 'fastclick'
import iView from 'iview'

Vue.use(iView)
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // {router: router}
  router,
  // ES6省略写法 键和值名字一样 相当于 {App: App}
  components: { App },
  template: '<App/>'
})

// 路由就是根据url的不同，返回不同的内容
