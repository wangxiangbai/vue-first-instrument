import Vue from 'vue'
import ElementUI from 'element-ui'   // eleUI组件库
import axios from 'axios'  // VUE接口调用，导入axios

import App from './App.vue'     // 组件入口
import router from './router'   // 路由

import  'element-ui/lib/theme-chalk/index.css'   //样式展示


Vue.config.productionTip = false    // 生产模式false即debug模式

// 注册插件到Vue全局根实例
Vue.use(ElementUI);
Vue.prototype.axios = axios

// Vue根实例 实例化
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




// vue接口调用，得下载axios，用他来访问接口，需要修改中的webpack.config.js文件中代码，将target的对应路径该为自己需要调用的接口地址