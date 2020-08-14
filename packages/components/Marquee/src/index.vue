<template>
    <div class="marquee" :style="myStyle">
        <div class="marquee-scroll">
           {{content}}
        </div>
    </div>
</template>

<script>
    import {styleUtil} from "./../../../common/utils/styleUtils"
    export default {
        name: "ioc-marquee",
        props:{
          style:{
            type:Object,
            default: () => ({})
          },    
          content:{
            type:String,
            default: () => ("这是一段会滚动的文字，你可以将它替换掉")
          }
        },
        data(){
            return{
              myStyle:{},

            }
        },
        mounted(){
          if(this.style){
              this.initCustomStyle();
          }
        },
        
        methods:{
          initCustomStyle(){
              if(typeof this.style.width ==="number" && typeof this.style.height ==="number"){
                this.myStyle={
                    width:styleUtil.px2vw(this.style.width),
                    height:styleUtil.px2vh(this.style.height),
                }
              }else{
                throw("长宽必须是数字")
              }
          }
        }
    }
</script>

<style lang="scss" scoped="scoped">

    @import "./packages/common/style/variables.scss";
    @import "./packages/common/style/mixin.scss";

    .marquee{
       color: $color-success;
        overflow: hidden;
       // border: 1px solid red;
        .marquee-scroll{
            width: 100%;
            height: 100%;
            overflow: hidden;
            animation: scrollToLeft 20s linear infinite;
            transform-origin: 0 0;
            z-index: 1;
            font-size: px2font(24);

        }
    }

    @keyframes scrollToLeft {
        from {
            transform: translateX(100%)
        }
        to {
            transform: translateX(-100%)
        }
    }


</style>