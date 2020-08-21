import DataItem01 from "./src/DataItem01"
import DataItem02 from "./src/DataItem02"
import DataItem03 from "./src/DataItem03"
import DataItem04 from "./src/DataItem04"
import DataItem05 from "./src/DataItem05"
import DataItem06 from "./src/DataItem06"
import DataItem07 from "./src/DataItem07"
import DataItem08 from "./src/DataItem08"
const DataItems=[
  DataItem01,
  DataItem02,
  DataItem03,
  DataItem04,
  DataItem05,
  DataItem06,
  DataItem07,
  DataItem08
  

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
  DataItem05,
  DataItem06,
  DataItem07,
  DataItem08
}