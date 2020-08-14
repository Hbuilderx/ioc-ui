<template>
    <div class="chart-wrap">
        <div class="chart-wrap-item">
            <ioc-chart
                :extra-option="option1"
                :chart-type="chartType"
            />
        </div>
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
        // 定制化配置覆盖默认配置(可选)
        option1: pieChartSettings.setting1,
      };
    },
  }
</script>

<style lang="scss" scoped="scoped">
@import "./../../assets/css/theme.scss";
    .chart-wrap{
       // width: 100%;
      //  border: 1px solid red;
        overflow: hidden;
        float: left;
        .chart-wrap-item{
            width: 300px;
            height: 300px;
            float: left;
            background-color:$component-bg;
            box-shadow: $component-shadow;
            border-radius: $component-radius;
            margin: 10px;
        }
    }
</style>