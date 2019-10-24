<template>
  <div id="manhome">
    <div class="manhome-box">
      <p class="manhome-userid">ID：331373</p>
      <div class="manhome-context">
        <div class="context-top">
          <div
            class="brjing"
            :style="{backgroundImage: 'url(' + images.circular + ')', backgroundSize:'cover'}"
          >
            <img class="top-Head" :src="images.heade" />
          </div>

          <div class="top-dec">
            <p class="dec-text">张三 少时诵诗书...</p>
            <p class="dec-tel">
              <img />
              <span>13615603317</span>
            </p>
          </div>
          <img @click="showCard" class="top-card" :src="images.card" />
        </div>
        <div class="context-bom">
          <p>智想版:2019-10-08到期</p>
          <img :src="images.code" />
        </div>
        <div class="compon-name">三三四四公司</div>
      </div>
    </div>
    <div class="man-cell">
      <van-cell title="产品管理" is-link to="/productman" />
      <van-cell title="发布动态" is-link to="/publicadynamics"/>
      <van-cell title="修改简介" is-link to="/introduction"/>
      <van-cell title="选择风格" is-link to="/chosestyle"/>
      <van-cell title="基本信息" is-link  to="/briefintroduction"/>
      <van-cell title="访客统计" is-link to="/vsitorsta"/>
      <van-cell title="系统设置" is-link to="/systemsetup"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "manhome",
  data() {
    return {
      images: {
        card: require("../../assets/man/card.png"),
        circular: require("../../assets/man/circular.png"),
        code: require("../../assets/man/code.png"),
        heade: require("../../assets/man/heade.png")
      }
    };
  },
  methods:{
    showCard(){
    this.$router.push("/cardholder")
   }
  }

};
</script>

<style lang="scss" scoped>
#manhome {
  margin-bottom: 120px;
  .manhome-box {
    height: 326px;
    background: rgba(9, 178, 255, 1);
    border: 0px solid rgba(0, 0, 0, 1);
    .manhome-userid {
      font-size: 28px;
      font-family: Droid Sans Fallback;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding: 20px;
    }
    .manhome-context {
      height: 329px;
      background: rgba(255, 255, 255, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      box-shadow: 0px 0px 5px 0px rgba(197, 189, 189, 1);
      border-radius: 9px;
      margin: 10px 20px;
      position: absolute;
      z-index: 2;
      .context-top {
        display: flex;
        .brjing {
          margin: 20px;
          width: 172px;
          height: 172px;
          overflow: hidden;

          .top-Head {
            height: 134px;
            width: 134px;
            margin: 20px;
          }
        }

        .top-dec {
          margin: 20px 10px;
          .dec-text {
            margin-top: 30px;
            font-size: 32px;
            font-family: Droid Sans Fallback;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }
          .dec-tel {
            margin-top: 25px;
            span {
              font-size: 24px;
              font-family: Droid Sans Fallback;
              font-weight: 400;
              color: rgba(140, 255, 86, 1);
            }
          }
        }
        .top-card {
          width: 160px;
          height: 74px;
          margin: 40px 20px;
        }
      }
      .context-bom {
        border-bottom: 3px solid #eee;
        display: flex;
        margin: 0px 20px;
        justify-content: space-between;
        padding-bottom: 10px;
        p {
          font-size: 28px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(150, 150, 150, 1);
          padding-left: 80px;
        }
        img {
          margin-top: -25px;
          padding-right: 20px;
          width: 73px;
          height: 73px;
        }
      }
      .compon-name {
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin: 10px 20px;
      }
    }
  }
  .man-cell {
    background: #eee;
    padding-top: 110px;
    padding-bottom: 40px;
    .van-cell {
      margin: 10px 0;
    }
  }
}
</style>