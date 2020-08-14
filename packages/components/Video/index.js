import Video from "./src/index"

const tables=[
  Video
]

// 为组件提供 install 安装方法，供按需引入
tables.map((item)=>{
  item.install = function (Vue) {
    Vue.component(item.name, item)
  }
})

// 导出组件
export {Video}