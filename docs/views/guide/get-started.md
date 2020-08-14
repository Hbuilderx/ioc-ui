---
title: '快速上手'
sidebarDepth: 3
---
## 快速上手
```vue
<template>
    <div class="chart-wrap">
        <ioc-chart
            :extra-option="option1"
            :chart-type="chartType"
        />
    </div>
</template>

<script>
   import {pieChartSettings} from "../../common/data/pieChartSettings";
   export default {
    name: "PieChartCases",
    data(){
      return{
        // 业务数据单独配置(可选)
        data:[],
        //图表类型(为了防止混乱，必须指定)
        chartType:"pie",
        // 自定义配置覆盖默认配置(可选)
        option1: pieChartSettings.setting1,
      };
    },
  }
</script>

<style lang="scss" scoped="scoped">
    .chart-wrap-item{
        width: 300px;
        height: 300px;
    }
</style>

```

