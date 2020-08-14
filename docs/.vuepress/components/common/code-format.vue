<template>
  <div class="code-format">
    <div class="ns-all-wrapper">
      <div class="component-wrapper">
        <div class="ns-component-wrapper">
          <slot name="componentNameTitle"></slot>
        </div>
        <div class="ns-description-wrapper">
          <slot name="description"></slot>
        </div>
        <section class="ns-border-wrapper">
          <div class="ns-show-component-wrapper">
            <slot name="showComponents"></slot>
          </div>
          <div v-if="isShow" class="ns-code-description-wrapper">
            <div class="ns-show-code-wrapper">
              <slot name="paraDescription"></slot>
            </div>
            <div class="ns-code-wrapper">
              <slot name="showCode"></slot>
            </div>
          </div>
          <div class="vue-ns-button" @click="handleToggleShow">
            <div class="vue-ns-wrapper">
              <span class="vue-ns-buttonText">{{buttonText}}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeFormat',
  data() {
    return {
      isShow: false,
      buttonText: '显示代码',
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.buttonText = this.isShow ? '隐藏代码' : '显示代码'
    },
  },
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
.code-format{
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  font-size:16px;
  color: #5e6d82;
  .ns-all-wrapper{
    .component-wrapper{
      .ns-component-wrapper{
        .component{
          .component-name{
            font-size: 1.8em;
            color: #1f2f3d;
            font-weight: 400;
          }
          .component-text{
            font-size: 0.8em;
            margin-top: 10px;
          }
        }
      }
      .ns-description-wrapper{
        margin-top: 38px;  
        .ns-description-title{
          font-size: 1.2em;
          font-weight: 400;
          color: #1f2f3d;
          margin-bottom: 26px;
        }
        .ns-description-text{
          font-size: 14px;
          margin: 15px 0;
          line-height: 2em;
          .add-color{
            font-size: 14px;
            padding: 0.1em 0.2em;
            border: 1px solid #ebebeb;
            border-radius: 5px; 
            background: #f7f7f7;//#ebebeb
            border-radius: 5px; 
            margin: 0 0.2em;
          }
          .noteColor{
            color: #000;
            font-weight: 600;
          }
          a{
            text-decoration:none;
          }
        }
      }
      .ns-border-wrapper{
        margin-top: 40px;
        border: 1px solid #ebebeb;
        .ns-show-component-wrapper{
          border-bottom: 1px solid #ebebeb;
          padding-left: 12px;
          .ns-show-component{
            padding: 16px 0;
          }
        }
        .ns-code-description-wrapper{
          margin-top: 2px;
          .ns-show-code-wrapper{
            border: 1px solid #ebebeb;
            border-radius: 3px; 
            padding: 10px 0;
            padding-left: 0.8em; 
            margin: 10px 6px;
            font-size: 14px;
            font-weight: 400px;
            .ns-code-description{
              .ns-paraStyle-wrapper{
                line-height: 2em;
                .ns-paraStyle{
                  font-size: 14px;
                  padding: 0.1em 0.2em;
                  border: 1px solid #ebebeb;
                  border-radius: 5px; 
                  background: #f7f7f7;
                  border-radius: 5px; 
                  margin: 0 0.2em;
                }
              }
            }
          }
          .ns-code-wrapper{
            line-height: 6em;
            padding: 3px 6px;
            .codeStyle{
              font-size: 18px;
              padding: 6px 0;
              padding-left: 12px;
            }
          }
        }
        .vue-ns-button{
          border-top: 1px solid #ebebeb;
          border-radius: 3px;
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: top;
          .vue-ns-wrapper{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: top;
            padding: 0.7em 0;
            .vue-ns-buttonText{
              font-size: 14px;
              color: #ebebeb;
              cursor: pointer;
            } 
          }
          &:hover{
            background-color: #f7f7f7;
            .vue-ns-buttonText{
              color: #409eff;
            }
          }
        }
      }
    }
  }
}
</style>

