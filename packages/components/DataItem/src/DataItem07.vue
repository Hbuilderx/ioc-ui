<!--
@name:
@description:
@author: zhu.ds
@date: 2020-08-22 08:36:19
@last edit by:
-->

<template>
    <div class="box">
        <div class="name" >{{name}}</div>
        <div class="value" >
          {{value}}
          <span>件</span>
        </div>
        <div class="total" ref="total"></div>
        
    </div>
</template>

<script>
  export default {
    name: "ioc-dataItem07",
    props:{
      name:{
        type:String,
        default:()=>('数据名称')
      }, 
      total:{
        type:Number,
        default:()=>(24)
      },
      value:{
        type:Number,
        default:()=>(18)
      },
    },
    data(){
      return{
      };
    },

    mounted(){
      let that=this
      this.initStatus(16);    
    },
    
    updated() {
      this.initStatus(16);
    },

    methods:{
        initStatus(cubeCount){
          let that=this;
          let totalDomWidth=this.$refs.total.offsetWidth;  
          let ratio=(this.value/this.total);
          let cubeWidth=Math.floor((totalDomWidth/cubeCount)-1);  
         
          let cubeDomArr;
               
          for(let i=0;i<cubeCount;i++){
            let cubeDom=document.createElement('span');         
            cubeDom.style.background='#0F3D61'          
            cubeDom.style.width=cubeWidth+'px'         
            this.$refs.total.appendChild(cubeDom)
          }
                
          let nowCubeCount=Math.floor(cubeCount*ratio);              
          cubeDomArr=this.$refs.total.children;   
                
          let startColor=[16,139,247]; 
          let endColor=[15,218,250];
          let perDiffColor=[];
          
          for(let i=0;i<endColor.length;i++){
            perDiffColor.push( Number(((endColor[i]-startColor[i])/nowCubeCount).toFixed(3)))
          }
        
          for(let i=0;i<nowCubeCount;i++){
            cubeDomArr[i].style.background=
            `RGB(
              ${startColor[0]+i*perDiffColor[0]},
              ${startColor[1]+i*perDiffColor[1]},
              ${startColor[2]+i*perDiffColor[2]}
            )
            `
          }
          
          
        },
    },


  }
</script>

<style lang="scss" scoped>
    @import "./packages/common/style/mixin.scss";
    .box{
        width: px2vw(540);
        height: px2vh(58);
        position: relative;          
    }
    .box .name{
        position: absolute;
        font-size: px2font(23);
        color: #fff;
        left: 0;
        top: 0;
    }

    .box .total{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: px2vh(15);
       // border-radius: px2vh(7);
       // background-color:#0F3F63;
     //  border: 1px solid red;
       display: flex;
       justify-content: space-between;
    }
    

    .box .value{
        position: absolute;
        color: #fff;
        font-size: px2font(30);
        right: 0;
        top: 0;
    }
    
    .box .value span{
      font-size: px2font(23);
    }

</style>