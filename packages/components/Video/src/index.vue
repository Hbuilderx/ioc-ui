<template>
    <div class="video" :style="myStyle">
        <div class="video-body">
            <video
                :id="setting.id"
                width='100%'
                height="100%"
                autoplay="autoplay"
                controls="controls"
                muted
                loop
                allowfullscreen>
                <source
                    :src="setting.src"
                    :type="setting.type"
                />
            </video>
        </div>
        <div class="video-footer" v-if="setting.showFooter">
            <div class="video-footer-num" >1</div>
            <div class="video-footer-title" >第一个</div>
            <div class="video-footer-time" >2020年7月28日17:28:03</div>
        </div>
    </div>
</template>

<script>
   import {styleUtil} from "./../../../common/utils/styleUtils"
  export default {
    name: "ioc-video",
    props:{
      setting:{
        type:Object,
        required:true,
      },

    },
    data(){
      return{
        myStyle:{},
        player:'',
        id:null,
      };
    },

    mounted(){
      if(this.setting.src!=="" && this.setting.id){
        this.id=this.setting.id;
        this.initVideo(this.id)
      }

      if(this.setting){
          this.initCustomStyle();
      }

    },
    beforeDestroy(){
      this.player.stop();//关闭视频流
    },
    methods:{
      //初始化Video
      initVideo(id){
        setTimeout((id)=>{
          this.player = new EZUIKit.EZUIPlayer(id)
        },100)
      },

      initCustomStyle(){
          if(typeof this.setting.width ==="number" && typeof this.setting.height ==="number"){
            this.myStyle={
                width:styleUtil.px2vw(this.setting.width),
                height:styleUtil.px2vh(this.setting.height),
            }
          }else{
            throw("长宽必须是数字")
          }
      }
    },

  }
</script>

<style lang="scss" scoped="scoped">
    @import "./packages/common/style/mixin.scss";
    .video{
        min-width: px2vw(300);
        min-height: px2vh(200);
        .video-body{
            height: 80%;
            width: 100%;
        }
        .video-footer{
            height: 20%;
            width: 100%;
            background-color: #1E9FFF;
            color: #fff;
            font-size: px2font(24);
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            div{
              //  float: left;
            }
        }

    }

</style>