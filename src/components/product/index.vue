<template>
  <div id="product">
    <GlobaHeader :text="text" />
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch"></van-search>
    <div class="Vanswipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="images.vanswipe" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="images.vanswipe" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="images.vanswipe" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="banlan">
      <div class="banlan-all">
        <img :src="images.all" />
        <span>全部</span>
      </div>
      <div class="banlan-all">
        <img :src="images.foods" />
        <span>食物</span>
      </div>
      <div class="banlan-all">
        <img :src="images.foods" />
        <span>食物</span>
      </div>
    </div>
    <div class="titlesorting">
      <div class="moren">
        <span>默认</span>
        <img :src="images.arrowO" />
      </div>
      <div class="moren nomoren">
        <span>时间</span>
        <img :src="images.arrow" />
      </div>
      <div class="moren nomoren">
        <span>时间</span>
        <img :src="images.arrow" />
      </div>
    </div>
    <div class="showall">
      <p class="showall-title">全部</p>
      <div class="showall-context" @click="getProductdetails">
        <img :src="images.xiaolongx" />
        <div class="showall-title-right">
          <p class="right-text">小龙虾</p>
          <p class="right-price">￥40</p>
        </div>
        <div class="showall-arrow">
          <img :src="images.rightarr" />
          <p>浏览量10</p>
        </div>
      </div>

      <div class="showall-context">
        <img :src="images.xiaolongx" />
        <div class="showall-title-right">
          <p class="right-text">小龙虾</p>
          <p class="right-price">￥40</p>
        </div>
        <div class="showall-arrow">
          <img :src="images.rightarr" />
          <p>浏览量 10</p>
        </div>
      </div>
      <p class='noproduct'>已展示全部产品</p>
    </div>
  </div>
</template>

<script>
import GlobaHeader from "../globalcom/globaHeader";
export default {
  name: "product",
  components: { GlobaHeader },
  data() {
    return {
      text: "产品",
      value: "",
      images: {
        vanswipe: require("../../assets/product/vanswipe.png"),
        all: require("../../assets/product/all.png"),
        foods: require("../../assets/product/foods.png"),
        arrowO: require("../../assets/product/arrowO.png"),
        arrow: require("../../assets/product/arrow.png"),
        xiaolongx: require("../../assets/product/xiaolongx.png"),
        rightarr: require("../../assets/product/rightarr.png")
      }
    };
  },
  methods: {
    onSearch() {},
    getProductdetails(){
        this.$router.push("/productdetails")
    },
  }
};
</script>

<style lang="scss" scoped>
#product {
  margin-bottom: 120px;
  .Vanswipe {
    margin: 25px;
    .van-swipe {
      width: 700px;
      height: 395px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banlan {
    margin: 15px;
    border-bottom: 2px solid #eee;
    display: flex;
    flex-wrap: wrap;
    // height:150px;
    .banlan-all {
      width: 100px;
      margin-right: 20px;
      margin-bottom: 20px;
      text-align: center;
      img {
        width: 92px;
        height: 92px;
        margin-bottom: 10px;
      }
      span {
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(45, 45, 45, 1);
      }
    }
  }
  .titlesorting {
    display: flex;
    .moren {
      margin: 20px 40px;
      span {
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      img {
        width: 13px;
        height: 21px;
      }
    }
    .nomoren {
      span {
        color: rgba(153, 152, 152, 1);
      }
    }
  }
  .showall {
    width: 100%;
    background: rgba(241, 241, 241, 1);
    .noproduct{
        font-size:28px;
font-family:Droid Sans Fallback;
font-weight:400;
color:rgba(188,188,188,1);
text-align: center;
padding:53px;
    }
    .showall-title {
      font-size: 28px;
      padding: 30px 0 0 30px;
      font-family: Droid Sans Fallback;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
    .showall-context {
      height: 200px;
      margin: 20px;
      padding: 20px;
      background: rgba(255, 255, 255, 1);
      border-radius: 7px;
      display: flex;
      img {
        width: 200px;
        height: 200px;
        flex: 2;
      }
      .showall-title-right {
        margin-left: 25px;
        flex: 4;
        .right-text {
          font-size: 28px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          margin-top: 40px;
          margin-bottom: 30px;
        }
        .right-price {
          font-size: 35px;
          font-family: FZDaHei-B02S;
          font-weight: bold;
          color: rgba(255, 64, 64, 1);
        }
      }
      .showall-arrow {
        right: 30px;
        flex: 2;
        text-align: center;
        img {
          width: 30px;
          height: 56px;
          margin-top: 60px;
          margin-left: 70px;
        }
        p {
          font-size: 28px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(178, 175, 175, 1);
          margin-top: 40px;
        }
      }
    }
  }
}
</style>