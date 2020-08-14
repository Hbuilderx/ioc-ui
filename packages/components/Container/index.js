// 导入组件，组件必须声明 name
import IContainer from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
IContainer.install = function (Vue) {
  Vue.component(IContainer.name, IContainer)
}

// 导出组件
export default IContainer
