<template>
  <div id="home">
    <div
      class="topHome"
      :style="{backgroundImage: 'url(' + image.touxiang + ')', backgroundSize:'cover'}"
    >
      <div class="overlayhome">
        <h3>盼盼公司</h3>
        <div class="touximage">
          <van-image round :src="image.touxiang" />
        </div>

        <p class="nameZ">张赞</p>
        <p>平面设计师</p>
        <p>13312356325</p>
        <div class="xiangmessage">
          <div class="xiangmessage-top">
            <p class="xiangmessage-top-left">
              <img :src="image.youxiang" />
              <span>123563256@qq.com</span>
            </p>
            <p class="xiangmessage-top-right">
              <img :src="image.wode01" />
              <span>人脉40</span>
            </p>
          </div>
          <div class="xiangmessage-bom">
            <img :src="image.dingwei" />
            <span>湖南省长沙市岳麓区麓谷企业广场【点击查看地图】</span>
          </div>
        </div>
      </div>
    </div>
    <div class="information">
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="其他信息">
          <div>
            <span>微信账户</span>
            <span>123456789</span>
            <span>二维码</span>
          </div>
          <div>
            <span>微信账户</span>
            <span>123456789</span>
            <span>二维码</span>
          </div>
          <div>
            <span>微信账户</span>
            <span>123456789</span>
            <span>二维码</span>
          </div>
        </van-tab>
        <van-tab title="个人资料">
          <div>
            <span>职务</span>
            <span>设计师</span>
          </div>
          <div>
            <span>个人专长</span>
            <span>平面设计</span>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="contont">
      <p>内容</p>
    </div>
    <div class="conImage">
      <div class="conImage-box">
        <van-image fit="contain" :src="image.contentpicture" />
      </div>
    </div>
    <div class="joinman">
      <p class="joinman-name">进入名片管理中心</p>
      <p class="joinman-image">二维码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      image: {
        touxiang: require("../../assets/home/touxiang.png"),
        wode01: require("../../assets/home/wode01.png"),
        youxiang: require("../../assets/home/youxiang.png"),
        dingwei: require("../../assets/home/dingwei.png"),
        contentpicture: require("../../assets/home/contentpicture.png")
      },
      active: 0
    };
  },
  methods: {
    onClick() {
      console.log("打印得好似点击得onClick", this.active);
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  margin-bottom: 120px;
  .topHome {
    // display: none;
    // opacity:0.6;
    // background:rgba(108,108,1,0.8);
    // background-color: #d9d9d9;
    .overlayhome {
      background-color: rgba(0, 0, 0, 0.5);
      h3 {
        width: 100%;
        padding-top: 72px;
        // height:274px;
        // line-height:274px;
        text-align: center;
        font-size: 42px;
        font-family: Droid Sans Fallback;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .touximage {
        width: 328px;
        height: 328px;
        z-index: 2;

        text-align: center;
        vertical-align: middle;
        margin: auto;
        margin-top: 79px;
        background-color: rgba(0, 0, 0, 0.6);
        position: relative;
        border-radius: 50%;

        .van-image {
          top: 50%;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);

          //    vertical-align:middle;
          line-height: 328px;
          width: 279px;
          height: 279px;
        }
      }
      p {
        text-align: center;
        font-size: 32px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        margin-top: 25px;
        color: rgba(255, 255, 255, 1);
      }
      .nameZ {
        margin-top: 85px;
        font-size: 42px;
        font-weight: bold;
        // color:rgba(255,255,255,1);
      }
      .xiangmessage {
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 215px;

        .xiangmessage-top {
          display: flex;
          padding-left: 20px;
          padding-right: 20px;
          justify-content: space-between;
          margin-top: 20px;
          .xiangmessage-top-left {
            // margin-left:35px;
            img {
              width: 33px;
              height: 26px;
            }
            span {
              margin-left: 15px;
              font-size: 28px;
              font-family: Droid Sans Fallback;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
          .xiangmessage-top-right {
            img {
              width: 28px;
              height: 33px;
              margin-top: 10px;
            }
            span {
              margin-left: 15px;
              font-size: 28px;
              font-family: Droid Sans Fallback;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              // margin-top:-10px;
            }
          }
        }
        .xiangmessage-bom {
          padding-left: 20px;
          display: flex;
          margin-top: 20px;
          img {
            width: 32px;
            height: 42px;
            //   display: inline-block
          }
          span {
            margin-left: 25px;
            font-size: 28px;
            font-family: Droid Sans Fallback;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .information {
    width: 100%;
    height: 430px;
    background: dimgrey;
    /deep/ .van-tabs {
      background: dimgrey;
      .van-tab {
        color: rgba(255, 255, 255, 1);
      }
      /deep/ .van-tabs__nav {
        background: dimgrey;
        color: rgba(255, 255, 255, 1);
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      /deep/ .van-tabs__line {
        background: rgba(255, 255, 255, 1);
        bottom: 8px;
      }

      /deep/ .van-tabs__content {
        .van-tab__pane {
          height: 300px;
          width: 90%;
          margin: auto;
          background: rgba(255, 255, 255, 1);
          div {
            padding: 20px;
            span {
              font-size: 28px;
              font-family: Droid Sans Fallback;
              font-weight: 400;
              color: rgba(146, 146, 146, 1);
            }
          }
        }
      }
    }
  }
  .contont {
    width: 100%;
    height: 93px;
    text-align: center;
    color: ghostwhite;
    background: #4d4d72;
    p {
      line-height: 93px;
      font-size: 32px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
  .conImage {
    background: rgb(128, 128, 184);
    .conImage-box {
      padding: 20px;
      .van-image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .joinman {
    width: 100%;
    text-align: center;
    height: 110px;
    .joinman-name {
      line-height: 110px;
      font-size: 28px;
      font-family: Droid Sans Fallback;
      font-weight: 400;
      color: rgba(174, 174, 233, 1);
    }
    .joinman-image {
      line-height: 110px;
      display: inline;
      position: absolute;
      margin-top: -110px;
      right: 40px;
    }
  }
}
</style>