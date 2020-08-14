// 导入组件，组件必须声明 name
import IButton from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
IButton.install = function (Vue) {
  Vue.component(IButton.name, IButton)
}

// 导出组件
export default IButton
