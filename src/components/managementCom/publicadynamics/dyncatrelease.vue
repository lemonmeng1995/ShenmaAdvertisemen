 <template>
  <div class="dyncatrelease">
    <div class="catrelease-title">动态类别*</div>
    <van-field v-model="name" placeholder="请输入动态类别" />
    <div class="catre-status">
      <div class="status-title">状态</div>
      <div class="status-click">
        <div class="active">启动</div>
        <div>隐藏</div>
      </div>
    </div>
    <div class="catrelease-title">排序*</div>
    <van-field v-model="name" placeholder="请排序" />
    <div class="submit">
        提交
    </div>
  </div>
</template>

<script>
export default {
  name: "dyncatrelease",
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
.dyncatrelease {
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

  .submit{
      margin-top:100px;
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