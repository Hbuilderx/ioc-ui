<template>
  <div class="dataitem-wrap">
      <div class="dataitem-wrap-item">

          <div class="dataitem-wrap-item-box">
              <ioc-dataItem01 :name="source[0].name" :value="source[0].value"></ioc-dataItem01>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem03
                  :name="source[2].name"
                  :value="source[2].value"
                  :icon="source[2].icon"
              ></ioc-dataItem03>
          </div>
          

          <div class="dataitem-wrap-item-box">
              <ioc-dataItem05
               :num = 3
               type="类型3"
               :total=2000
               :value=1300
              ></ioc-dataItem05>
          </div>
          
         
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem06
               name="处办预期二级预警"
               :total=20
               :value=7
               background="#FFCC00"
              
              ></ioc-dataItem06>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem04
                  :name="source[3].name"
                  :value="source[3].value"
                  :icon="source[3].icon"
              ></ioc-dataItem04>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem09
               :icon="circle"
               value="236823.56"
               unit="万元"
               name="税收总额"
               color="#6176CC"
              ></ioc-dataItem09>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem07
               name="第三方巡查公司"
               :total=1467
               :value=1450 
               :startColor=[255,1,1]
               :endColor=[15,218,250]          
              ></ioc-dataItem07>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem08
               :num=3
               :value=4.567
               name="江苏省工业园区地方税务局啊哈哈哈哈哈"
              ></ioc-dataItem08>
          </div>
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem02 :name="source[1].name" :value="source[1].value"></ioc-dataItem02>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem10
               :icon="hat"
               value="236"
               name="学校"
              ></ioc-dataItem10>
          </div>
          
          <div class="dataitem-wrap-item-box">
              <ioc-dataItem11
               :value=167
               :total=1834
               name="无照经营游商"
               color="#843CFA"
              ></ioc-dataItem11>
          </div>
          
          
          
      </div>
  </div>
</template>

<script>
  import serviceIcon from "./../../assets/image/server.png"
  import circle from "./../../assets/image/circle.png"
  import hat from "./../../assets/image/hat.png"
  export default{
    name:"DataItemCases",
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
         ],
         
         circle:circle,
         hat:hat
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
            width: 850px;
            height: 300px;
            float: left;
            background-color:$component-bg;
            box-shadow: $component-shadow;
            border-radius: $component-radius;
            margin: 10px;
            .dataitem-wrap-item-box{
                margin: 10px;
                float: left;
            }
        }
    }
</style>
