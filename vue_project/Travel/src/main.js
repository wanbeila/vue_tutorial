// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 会自动查找App的文件
// .vue为单文件组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 省略写法 键和值名字一样
  components: { App },
  template: '<App/>'
})

// 路由就是根据url的不同，返回不同的内容
