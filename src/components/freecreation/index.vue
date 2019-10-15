<template>
  <div id="freecreation">
    <div class="required-box">
      <div class="required">
        <p class="requi-box">必填项</p>
        <!-- <van-cell-group> -->
        <van-field v-model="formData.name" placeholder="姓名" />
        <van-field v-model="formData.tel" placeholder="手机（账户）" />
        <van-field v-model="formData.email" placeholder="邮箱" />
        <van-field v-model="formData.password" placeholder="密码（用于以后修改名片信息）" />
        <!-- </van-cell-group> -->
      </div>
    </div>
    <div class="sele-box">
      <div class="sele-boxs">
        <p class="requi-box">选填项</p>
        <div class="xingx-box">
          <van-uploader :after-read="afterRead">
            <img :src="images.addimg" />
          </van-uploader>

          <div class="xingx-box-right">
            <img :src="images.selexingx" />
            <span>(注：头像尺寸建议为方形： 320*320px）</span>
          </div>
        </div>
      </div>
      <div class="sle-input">
        <van-field v-model="formData.name" placeholder="公司名称" />
        <van-field v-model="formData.tel" placeholder="固定电话" />
        <van-field v-model="formData.email" placeholder="个人专长" />
        <van-field v-model="formData.name" placeholder="公司地址" />
        <van-field v-model="formData.tel" placeholder="职位" />
        <van-field v-model="formData.email" placeholder="微信号" />
        <div class="xingx-box">
          <van-uploader :after-read="afterRead">
            <img :src="images.addimg" />
          </van-uploader>

          <div class="xingx-box-right">
            <img :src="images.weiximage" />
            <span>（注：个人微信二维码： 320*320px)</span>
          </div>
        </div>
      </div>
      <div class="onmusic">
        <img :src="images.onloadmuci" />
        <span>支持mp3格式，建议10MB之内</span>
      </div>
    </div>
    <div class="context">
      <p class="requi-box">内容</p>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="onBaocun">
        <p>  下一步</p>
      
        </div>
  </div>
</template>

<script>
export default {
  name: "freecreation",
  data() {
    return {
      formData: {
        name: "",
        tel: "",
        email: "",
        password: ""
      },
      images: {
        selexingx: require("../../assets/creact/selexingx.png"),
        addimg: require("../../assets/creact/addimg.png"),
        weiximage: require("../../assets/creact/weiximage.png"),
        onloadmuci: require("../../assets/creact/onloadmuci.png")
      }
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style lang="scss" scoped>
#freecreation {
  margin-bottom: 120px;

  .required-box {
    padding: 20px;
    .requi-box {
      position: absolute;
      z-index: 6;
      margin-left: 30px;
      margin-top: -60px;
      width: 175px;
      text-align: center;
      height: 46px;
      background: rgba(255, 102, 0, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      box-shadow: 0px 1px 3px 0px rgba(143, 141, 131, 1);
      border-radius: 23px;
      font-size: 31px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .required {
      height: 500px;
      margin: 30px;
      padding-top: 30px;
      background: rgba(255, 204, 0, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      border-radius: 10px;

      .van-cell {
        margin: 20px auto;
        border-radius: 10px;
        width: 90%;
      }
    }
  }
  .sele-box {
    margin: 40px;
    // height: 2303px;
    background: rgba(255, 255, 255, 1);
    border: 0px solid rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 17px 0px rgba(208, 208, 207, 1);
    border-radius: 10px;
    .requi-box {
      position: absolute;
      z-index: 6;
      margin-left: 30px;
      margin-top: -30px;
      width: 175px;
      text-align: center;
      height: 46px;
      background: rgba(255, 102, 0, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      box-shadow: 0px 1px 3px 0px rgba(143, 141, 131, 1);
      border-radius: 23px;
      font-size: 31px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .xingx-box {
      display: flex;
      border-bottom: 3px solid #eee;
      margin: 0 20px;
      .van-uploader {
        padding: 40px 20px 20px 30px;
        /deep/ .van-uploader__wrapper {
          width: 239px;
          height: 239px;
          img {
            width: 239px;
            height: 239px;
          }
          /deep/ .van-uploader__upload {
            width: 100%;
            height: 100%;
          }
        }
      }
      .xingx-box-right {
        img {
          width: 269px;
          height: 89px;
          display: block;
          margin: 40px 0px;
        }
        span {
          font-size: 21px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(158, 158, 158, 1);
        }
      }
    }

    .sele-boxs {
    }
    .sle-input {
      margin: 0 20px;
      padding: 20px 0;
      //   border-bottom: 3px solid #eee;
      /deep/ .van-cell {
        .van-cell__value {
          box-shadow: 0px 5px 6px 0px rgba(202, 212, 195, 0.35);
          .van-field__body {
            height: 78px;
            padding-left:20px;
            background: rgba(249, 249, 249, 1);
            border: 0px solid rgba(0, 0, 0, 1);
            border-radius: 5px;
          }
        }
      }
    }
    .onmusic {
      margin: 0 40px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      img {
        width: 269px;
        height: 90px;
      }
      span {
        font-size: 21px;
        line-height: 100px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(158, 158, 158, 1);
      }
    }
  }
  .context {
    margin: 40px;
    height: 284px;
    background: rgba(255, 255, 255, 1);
    border: 0px solid rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 17px 0px rgba(208, 208, 207, 1);
    border-radius: 10px;
    .requi-box {
      position: absolute;
      z-index: 6;
      margin-left: 30px;
      margin-top: -30px;
      width: 175px;
      text-align: center;
      height: 46px;
      background: rgba(255, 102, 0, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      box-shadow: 0px 1px 3px 0px rgba(143, 141, 131, 1);
      border-radius: 23px;
      font-size: 31px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
    .van-uploader {
      padding: 80px 20px 20px 30px;
      /deep/ .van-uploader__wrapper {
        width: 150px;
        height: 150px;
        /deep/ .van-uploader__upload {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .onBaocun {
        padding: 20px 40px 40px 40px;
      p{
            height: 84px;
    line-height:84px;
    background: rgba(255, 150, 0, 1);
    border: 0px solid rgba(0, 0, 0, 1);
 
    text-align: center;
    font-size: 31px;
    font-family: Droid Sans Fallback;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);

      }
  
  }
}
</style>