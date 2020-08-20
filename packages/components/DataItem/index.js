import DataItem01 from "./src/DataItem01"
import DataItem02 from "./src/DataItem02"
import DataItem03 from "./src/DataItem03"
import DataItem04 from "./src/DataItem04"
import DataItem05 from "./src/DataItem05"
const DataItems=[
  DataItem01,
  DataItem02,
  DataItem03,
  DataItem04,
  DataItem05

]

// 为组件提供 install 安装方法，供按需引入
DataItems.map((item)=>{
  item.install = function (Vue) {
    Vue.component(item.name, item)
  }
})

// 导出组件
export {
  DataItem01,
  DataItem02,
  DataItem03,
  DataItem04,
  DataItem05
}