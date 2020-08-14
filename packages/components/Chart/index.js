// 导入组件，组件必须声明 name
import Chart from './src/Chart.vue'


const pieCharts=[
  Chart,
]

pieCharts.map((item)=>{
  // 为组件提供 install 安装方法，供按需引入
  item.install = function (Vue) {
    Vue.component(item.name, item)
  }
})


// 导出组件
export {
  Chart,
}
