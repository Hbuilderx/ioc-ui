//组件入口文件,统一注册



// 导入组件
import IButton from './components/Button/index.js'
import {Chart} from './components/Chart/index.js'
import {Table01,Table02} from './components/Table/index.js'
import {Video} from './components/Video/index.js'
import {Marquee} from './components/Marquee/index.js'
import {
  
DataItem01,
DataItem02,
DataItem03,
DataItem04,
DataItem05,
DataItem06,
DataItem07,
DataItem08
 } from './components/DataItem/index.js'

// 组件列表
const components = [
  IButton,
  Chart,
  Table01,
  Table02,
  Video,
  Marquee,
  DataItem01,
  DataItem02,
  DataItem03,
  DataItem04,
  DataItem05,
  DataItem06,
  DataItem07,
  DataItem08
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件(组件必须有name属性)
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  IButton,
  Chart,
  Table01,
  Table02,
  Video,
  Marquee,
  DataItem01,
  DataItem02,
  DataItem03,
  DataItem04,
  DataItem06,
  DataItem07,
  DataItem08

}

