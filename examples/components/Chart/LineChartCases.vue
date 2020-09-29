<template>
    <div class="chart-wrap">
        <div class="chart-wrap-item">
            <ioc-chart
                :data-list="chartData"
                :extra-option="option1"
                :chart-type="chartType"
                :autoplay="true"
            />
        </div>
    </div>
</template>

<script>
  import {lineChartSettings} from "../../common/data/lineChartSettings";

  export default {
    name: "LineChartCases",
    data(){
      return{
        // 业务数据单独配置(可选)
        chartData: [3.1, 4.6, 5.7, 5.8, 5.6, 5.8],
        chartType:'line',
        // 定制化配置覆盖默认配置
        option1: lineChartSettings.setting1,
      };
    },
  }
</script>

<style lang="scss" scoped="scoped">
    @import "./../../assets/css/theme.scss";
    .chart-wrap{
        //width: 100%;
       // border: 1px solid red;
        overflow: hidden;
        float: left;
        .chart-wrap-item{
            width: 350px;
            height: 300px;
            float: left;
            background-color:$component-bg;
            box-shadow: $component-shadow;
            border-radius: $component-radius;
            margin: 10px;
        }
    }
</style>