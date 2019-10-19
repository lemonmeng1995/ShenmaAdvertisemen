 <template>
  <div class="catrelease">
    <div class="catrelease-title">产品类别*</div>
    <van-field v-model="name" placeholder="请输入产品类别" />
    <div class="catre-status">
      <div class="status-title">状态</div>
      <div class="status-click">
        <div class="active">启动</div>
        <div>隐藏</div>
      </div>
    </div>
    <div class="catrelease-title">排序*</div>
    <van-field v-model="name" placeholder="请排序" />
    <div class="rels-images">
      <img :src="images.addimg" />
      <div class="images-text">
        <div class="text-name">类别图标</div>
        <div class="text-size">建议尺寸120 * 120</div>
      </div>
      <div class="images-change">更换</div>
    </div>
    <div class="submit">
        提交
    </div>
  </div>
</template>

<script>
export default {
  name: "catrelease",
  data() {
    return {
      name: "",
      images: {
        addimg: require("../../../assets/man/addimg.png")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.catrelease {
  margin: 30px 26px 100px 26px;
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
  .catre-status {
    .status-title {
      font-size: 28px;
      font-family: Droid Sans Fallback;
      font-weight: 400;
      color: rgba(170, 170, 170, 1);
      padding: 20px 0;
    }
    .status-click {
      display: flex;
      div {
        margin: 5px 40px 5px 0;
        width: 159px;
        height: 60px;
        border: 1px solid rgba(207, 204, 204, 1);
        border-radius: 7px;
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(170, 170, 170, 1);
        text-align: center;
        line-height: 60px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(207, 204, 204, 1);
      }
      .active {
        background: rgba(61, 173, 0, 1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .rels-images {
    display: flex;
    margin: 40px;
    img {
      height: 126px;
      width: 126px;
      margin: 20px 20px 20px 0px;
    }
    .images-text {
      margin-top: 40px;
      .text-name {
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: bold;
        color: rgba(4, 4, 4, 1);
      }
      .text-size {
        margin-top: 10px;
        font-size: 21px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(167, 167, 167, 1);
      }
    }
    .images-change {
      width: 138px;
      height: 61px;
      background: rgba(220, 244, 255, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      border-radius: 31px;

      font-size: 28px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(60, 194, 255, 1);
      text-align: center;
      line-height: 61px;
      margin: auto;
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