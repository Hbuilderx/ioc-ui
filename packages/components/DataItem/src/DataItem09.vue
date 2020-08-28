<template>
  <div class="wrap">
      <img :src="icon" alt="" class="icon">
      <div class="value">{{value | formatData}}</div>
      <div class="unit" :style="{color:color}">{{unit}}</div>
      <div class="name" :style="{color:color}">{{name}}</div>
  </div>
</template>

<script>
  export default{
    name:"ioc-dataItem09",
    props:{
      icon:{
        type:String,
        default:()=>('')
      },
      value:{
        type:String,
        default:()=>('12345')
      },
      unit:{
        type:String,
        default:()=>('个')
      },
      name:{
        type:String,
        default:()=>('数据名称')
      },
      color:{
        type:String,
        default:()=>('#27A6FF')
      }
    },
    data(){
      return{
        
      };
    },
    filters:{
      formatData(number){
        let _num = number.toString() 
        let numArr = _num.split('.')
        let [num, dotNum] = numArr
        
        let operateNum = num.split('').reverse()
           
        let result = [], len = operateNum.length
        for(let i = 0; i< len; i++){
             result.push(operateNum[i])
             if(((i+1) % 3 === 0) && (i !== len-1)){
                  result.push(',')
            }
        }
    
        if(dotNum){
             result.reverse().push('.', ...dotNum)
             return result.join('')
        }else{
             return result.reverse().join('')
        }
      }
    },
    
    
  }
</script>

<style scoped="scoped" lang="scss">
  @import "./packages/common/style/mixin.scss";
  .wrap{
    height: px2vh(240);
    width: px2vw(160);
    //border: 1px solid red;
    position: relative;
    .icon{
      position: absolute;
      top: 0;
      left: px2vw(10);
      width: px2vw(140);
      height: px2vw(140);
    }
    .value{
      color: #fff;
      text-align: center;
      font-size: px2font(32);
      //font-weight: 600;
      position: absolute;
      top: px2vh(55);
      width: 100%;
    }
    
    .unit{
      text-align: center;
      width: 100%;
      font-size: px2font(22);
      position: absolute;
      top: px2vh(95);
    }
    
    .name{
      text-align: center;
      font-size: px2font(24);
      position: absolute;
      bottom: px2vh(0);
      width: 100%;
    }
  }
</style>
