<template>
<div class="forgetpass">
   <GlobaHeader :text="text" />
    <div class="catrelease-title">手机号码*</div>
    <van-field v-model="name" placeholder="请输入手机号码" />
     <div class="catrelease-title">验证码*</div>
    <van-field v-model="name" placeholder="请输入验证码" />
    <div class="yanzhnegm">获取验证码</div>
    <div class="sumcode">提交验证码</div>
</div>  

</template>

<script>
import GlobaHeader from "../globalcom/globaHeader";
export default {
    name:"forgetpass",
    components:{GlobaHeader},
    data(){
        return{
              text: "找回您得名片密码",

        }
    }

}
</script>

<style scoped lang="scss">
.forgetpass{
      margin: 30px 26px 120px 26px;
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
  .yanzhnegm{
      margin:10px;
      font-size: 28px;
      width:180px;
      height:60px;
      background: red;
      color:#fff;
      text-align: center;
      line-height:60px;
      border-radius: 20px;
  }
  .sumcode{
      height: 70px;
      line-height: 70px;
      background: red;
      color:#fff;
      text-align: center;
      border-radius: 20px;
      margin-top:100px;
      font-size: 35px;
  }

}
</style>