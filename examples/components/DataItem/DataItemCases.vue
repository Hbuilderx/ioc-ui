<template>
  <div class="dataitem-wrap">
      <div class="dataitem-wrap-item">

          <div class="dataitem-wrap-item-box">
              <ioc-dataItem01 :name="source[0].name" :value="source[0].value"></ioc-dataItem01>
          </div>
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem02 :name="source[1].name" :value="source[1].value"></ioc-dataItem02>
          </div>
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem03
                  :name="source[2].name"
                  :value="source[2].value"
                  :icon="source[2].icon"
              ></ioc-dataItem03>
          </div>
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem04
                  :name="source[3].name"
                  :value="source[3].value"
                  :icon="source[3].icon"
              ></ioc-dataItem04>
          </div>

          <div class="dataitem-wrap-item-box">
              <ioc-dataItem05
               num=3
               type="类型3"
               total=2000
               value=1300
              ></ioc-dataItem05>
          </div>

      </div>
  </div>
</template>

<script>
  import serviceIcon from "./../../assets/image/server.png"
  export default{
    name:"DataItemCases,",
    data(){
      return{
         source:[
           {
             name:"唯亭",
             value:"233"
           },
           {
             name:"日均流量",
             value:"2343.42"
           },
           {
             icon:serviceIcon,
             name:"民生服务",
             value:"5927"
           },

           {
             icon:serviceIcon,
             name:"区县协同事件数",
             value:"384"
           }
         ]
      };
    },
  }
</script>


<style lang="scss" scoped>
    @import "./../../assets/css/theme.scss";
    .dataitem-wrap{
       // width: 100%;
         // border: 1px solid red;
          float: left;
         overflow: hidden;
        .dataitem-wrap-item{
            width: 350px;
            height: 300px;
            float: left;
            background-color:$component-bg;
            box-shadow: $component-shadow;
            border-radius: $component-radius;
            margin: 10px;
            .dataitem-wrap-item-box{
                margin: 10px;
            }
        }
    }
</style>
