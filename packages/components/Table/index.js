// 导入组件，组件必须声明 name
import Table01 from './src/Table01.vue'
import Table02 from './src/Table02.vue'

const tables=[
  Table01,
  Table02
]


// 为组件提供 install 安装方法，供按需引入

tables.map((item)=>{
  item.install = function (Vue) {
    Vue.component(item.name, item)
  }
})


// 导出组件
export {Table01,Table02}
