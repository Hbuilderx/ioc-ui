import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'


// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

// 导入组件库
import iocui from '../packages'
// 注册组件库
Vue.use(iocui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
