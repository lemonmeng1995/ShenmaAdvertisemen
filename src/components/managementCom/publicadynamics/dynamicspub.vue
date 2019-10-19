<template>
  <div class="dynamicspub">
    <div class="catrelease-title">标题*</div>
    <van-field v-model="name" placeholder="请输入标题" />
    <div class="catrelease-title">类别</div>
    <van-field @click="getLeibie" v-model="name" placeholder="请选择" />
    <div class="catrelease-title">封面*</div>
    <van-uploader :after-read="afterRead" />
    <div class="catrelease-title">序号*</div>
    <van-field v-model="name" placeholder="请输入序号" />
     <div class="catrelease-title">名称*</div>
     <Profileeditor/>


       <div class="submit">提交</div>

    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
import Profileeditor from "../../globalcom/profileeditor"
export default {
  name: "dynamicspub",
  components:{Profileeditor},
  data() {
    return {
      show: false,
      name:"",
      radio: "1",
      images: {
        addimg: require("../../../assets/man/addimg.png")
      }
    };
  },
  methods: {
    getLeibie() {
      this.show = true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style scoped lang="scss">
.dynamicspub {
  margin: 30px 26px 140px 26px;
  .catrelease-title {
    padding: 20px;
    font-size: 28px;
    font-family: Droid Sans Fallback;
    font-weight: 400;
    color: rgba(170, 170, 170, 1);
  }
  .van-cell {
    border: 2px solid #eee;
  }

  .rels-images {
    display: flex;
    margin: 20px;
    border-bottom: 3px solid #eee;
    img {
      height: 126px;
      width: 126px;
      margin: 20px 20px 20px 0px;
    }
    .images-text {
      margin-top: 30px;
      .text-name {
        width: 200px;
        height: 50px;
        background: #eee;
        text-align: center;
        border-radius: 20px;
        line-height: 50px;
        font-size: 23px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(85, 84, 84, 1);
      }
      .text-size {
        margin-top: 10px;
        font-size: 21px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(167, 167, 167, 1);
      }
    }
  }
    .submit{
      height:86px;
background:rgba(255,59,59,1);
border:0px solid rgba(0,0,0,1);
border-radius:7px;

font-size:32px;
font-family:Droid Sans Fallback;
font-weight:bold;
color:rgba(255,255,255,1);
text-align: center;
line-height:86px;
  }
}
</style>
<style lang="scss">
.van-popup {
  .van-radio-group {
    padding: 20px;
    .van-radio {
      padding: 30px;
      .van-radio__icon {
        /deep/ .van-icon {
          font-size: 35px;
          //   color:red;
        }
      }
      .van-radio__label {
        font-size: 35px;
        color: red;
      }
    }
  }
}
</style>