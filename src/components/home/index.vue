<template>
  <div id="home">
    <div v-if="isMorec" class="home-Caidan" @click="getMoreCaidan(false)">
      <img :src="image.caidan"/>
    </div>
    <div v-else class="home-morecai">
        <img class="home-morecai-close" :src="image.close" @click="getMoreCaidan(true)"/>
        <img  class="home-morecai-baocun" :src="image.baocun"/>
        <img  class="home-morecai-caierwei" :src="image.caierwei"/>
        <img  class="home-morecai-tuijian" :src="image.tuijian"/>
        <img  class="home-morecai-chaunjian" :src="image.chaunjian"/>
    </div>
    <div class="home-music">
        <audio :src="musicfile" class="media-audio" loop autoplay ref="MusicPlay"></audio>   
       <img v-if="isMusci" :src="image.musci" @click="getMoremusci(false)"/>
       <img v-else :src="image.nomuic" @click="getMoremusci(true)"/> 
    </div>
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
        <img  class="sig-banner" :src="image.bannar"/>
      </div>
    </div>
  
    <div class="joinman">
      <p class="joinman-name" @click="getLogin">进入名片管理中心</p>
      <p class="joinman-image">二维码</p>
    </div>

    <van-popup
  v-model="show"
  position="bottom"
  :style="{ height: '60%' }"
>
  <div class="login">
    <div class="login-title">
      登入名片
    </div>
    <div class="login-zhanghu">
      账号：
    </div>
     <van-field v-model="value" placeholder="请输入账户" />
      <div class="login-zhanghu">
      密码：
    </div>
     <van-field v-model="value" placeholder="请输入账户" />
    <div class="login-foword" @click="getforgetpass">
      忘记密码？
    </div>
    <div class="onsubmit" @click="onsubmit">登 入</div>
    <div class="cancal" @click="onCancal"> 取 消</div>
  </div>
    </van-popup>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      musicfile:require("../../assets/musci/muc.mp3"),
      
      
      // autoplay:true,
      image: {
             bannar: require("../../assets/home/bannar.png"),
        touxiang: require("../../assets/home/touxiang.png"),
        wode01: require("../../assets/home/wode01.png"),
        youxiang: require("../../assets/home/youxiang.png"),
        dingwei: require("../../assets/home/dingwei.png"),
        contentpicture: require("../../assets/home/contentpicture.png"),
        caidan: require("../../assets/home/caidan.png"),
          musci: require("../../assets/home/musci.png"),
           nomuic: require("../../assets/home/nomuic.png"),

                baocun: require("../../assets/home/baocun.png"),
        close: require("../../assets/home/close.png"),
        caierwei: require("../../assets/home/caierwei.png"),
          tuijian: require("../../assets/home/tuijian.png"),
           chaunjian: require("../../assets/home/chaunjian.png"),

      },
      active: 0, //tab切换得标示
      isMorec:true, //左上角得到更多得菜单标示
      isMusci:true ,  //右上角音乐
      show:false,  //弹出层
    };
  },
  methods: {
    getforgetpass(){
       this.$router.push("/forgetpass")
    },
    onsubmit(){
       this.$router.push("/manhome")
    },
    onCancal(){
       this.show = false
    },
    getLogin(){
        this.show = true
    },
    onClick() {
      console.log("打印得好似点击得onClick", this.active);
    },
    //点击得到更多得菜单选择
    getMoreCaidan(state){
      this.isMorec = state
    },
    getMoremusci(state){
      console.log("232,", state,this.isMusci )
      this.isMusci = state
      // this.autoplay = state
      if(state){
        this.$refs.MusicPlay.play();
      }else{
        this.$refs.MusicPlay.pause();
      }
   
        console.log("2222,", state,this.isMusci )
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  margin-bottom: 120px;
  .home-Caidan{
    position:absolute;
    left:24px;
    top:25px;
    img{
      width:72px;
      height:73px;
    }
  }
  .home-morecai{
     position:absolute;
     text-align: center;
      left:24px;
    top:25px;
     width:74px;
height:483px;
background:rgba(188,188,206,0.7);
border:0px solid rgba(0,0,0,1);
border-radius:37px;
  img{
      margin-top:20px;
    }
    .home-morecai-close{
      width:53px;
      height:53px;
      // margin:20px auto;
    }
      .home-morecai-baocun{
      width:42px;
      height:64px;
      // margin:6px auto;
    }
      .home-morecai-caierwei{
      width:63px;
      height:64px;
      // margin:6px auto;
    }
      .home-morecai-tuijian{
      width:41px;
      height:64px;
      // margin:6px auto;
    }
      .home-morecai-chaunjian{
      width:42px;
      height:64px;
      // margin:6px auto;
    }

  }
  .home-music{
     position:absolute;
     right:30px;
     top:25px;
         img{
      width:72px;
      height:73px;
    }
  }
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
  .sig-banner{
    height:249px;
    // margin:20px;
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
 .van-popup {
    .login{
      padding:20px;
     .login-title{
       font-size: 38px;
       text-align: center;
       font-weight: 700;
       padding:10px;
       height:70px;
       line-height:70px;
       border-bottom: 3px solid #000;
     }
     .login-zhanghu{
       font-size: 30px;
       padding:20px;
       font-weight: 600;

     }
     .van-cell{
       border:2px solid #eee;

     }
     .login-foword{
       text-align: center;
       font-weight: 600;
       font-size: 28px;
       padding:20px 0px 50px 0;
       border-bottom: 2px solid #000;

     }
     .onsubmit{
       margin:20px;
       height:90px;
       text-align: center;
       line-height: 90px;
       background: red;
       border-radius: 20px;
       color:#fff;
       font-size: 30px;


     }
     .cancal{
         margin:20px;
       height:90px;
       text-align: center;
       line-height: 90px;
       background: #eee;
       border-radius: 20px;
       color:#fff;
       font-size: 30px;

     }
   }
 }
 
}
</style>