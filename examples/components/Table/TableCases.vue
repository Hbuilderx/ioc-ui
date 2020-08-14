<template>
    <div class="table-wrap">
       <div class="table-wrap-item">
           <ioc-table01></ioc-table01>
       </div>
    </div>
</template>

<script>
  export default {
    name: "TableCases"
  }
</script>

<style lang="scss" scoped="scoped">
    @import "./../../assets/css/theme.scss";
    .table-wrap{
        //width: 100%;
       // border: 1px solid red;
        overflow: hidden;
        float: left;
        .table-wrap-item{
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