<template>
  <div id="app">
      <PieChartCases />
      <LineChartCases></LineChartCases>
      <TableCases></TableCases>
      <VideoCases></VideoCases>
      <MarqueeCases></MarqueeCases>
      <DataItemCases></DataItemCases>
  </div>
</template>

<script>
import PieChartCases from "./components/Chart/PieChartCases";
import LineChartCases from "./components/Chart/LineChartCases";
import TableCases from "./components/Table/TableCases";
import VideoCases from "./components/Video/VideoCases";
import MarqueeCases from "./components/Marquee/MarqueeCases";
import DataItemCases from "./components/DataItem/DataItemCases"

export default {
  name: 'App',
  components: {
    PieChartCases,
    LineChartCases,
    TableCases,
    VideoCases,
    MarqueeCases,
    DataItemCases
  },
  data(){
    return{

    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #555a65;
  margin: 10px;
}

</style>
