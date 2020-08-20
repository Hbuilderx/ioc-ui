<template>
    <div class="item">
        <span class="item-icon">
            <img  :src="icon" alt="" >
        </span>
        <span class="item-value">{{value}}</span>
        <span class="item-name">{{name}}</span>

    </div>
</template>

<script>
  export default {
    name: "ioc-dataItem04",
    props:{
      icon:{
        type:String,
        default:()=>('')
      },
      name:{
        type:String,
        default:()=>('')
      },
      value:{
        type: String,
        default:()=>('0')
      }
    },
    data(){
      return{

      };
    },
    methods:{

    },


  }
</script>

<style lang="scss" scoped="scoped">
    @import "./packages/common/style/mixin.scss";
    .item{
        width: px2vw(160);
        height: px2vh(224);
        //border: 1px solid red;
        span{
            color: #fff;
            text-align: center;
            display: block;
            width: 100%;
        }
        .item-icon {
            display: block;
            width: px2vw(80);
            height: px2vw(80);
            background-image: linear-gradient(to top, #108DF7 , #0FD8F9);
            border-radius: 50%;
            margin: 0 auto;
            margin-bottom: px2vh(22);
            img{
                width: 80%;
                height: 80%;
                margin-top: 10%;
            }
        }

        .item-name{
            font-size: px2font(20);
            color: #90949C;

        }

        .item-value{
            font-size: px2font(32);
            font-weight: 700;
            margin-bottom: px2vh(4);
        }

    }

</style>