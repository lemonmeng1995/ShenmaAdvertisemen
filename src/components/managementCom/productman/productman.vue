<template>
  <div class="productman">
    <div class="productman-banna">
      <div class="pro-nowbanan">
        <p>产品管理</p>
      </div>
      <div class="pro-click">
        <router-link to="/banner">
          <img :src="images.banner" />
        </router-link>
        <router-link to="/procategory">
          <img :src="images.fenlai" />
        </router-link>
        <router-link to="/propublish">
          <img :src="images.fabu" />
        </router-link>

      </div>
    </div>
    <div class="productman-context">
      <div class="pro-text-top">
        <div class="img-dis">
          <img :src="images.xiaolongx" />
        </div>
        <div class="text-name">
          <span class="name">小龙虾</span>
          <span class="price">￥ 39</span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="pro-edit-bom">
        <div class="weilxian">
          <img :src="images.bianji" />
          <span>编辑</span>
        </div>
        <div>
          <img :src="images.shanchu" />
          <span>删除</span>
        </div>
      </div>
    </div>
    <div class="productman-context">
      <div class="pro-text-top">
        <div class="img-dis">
          <img :src="images.xiaolongx" />
        </div>
        <div class="text-name">
          <span class="name">小龙虾</span>
          <span class="price">￥ 39</span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="pro-edit-bom">
        <div class="weilxian">
          <img :src="images.bianji" />
          <span>编辑</span>
        </div>
        <div>
          <img :src="images.shanchu" />
          <span>删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productman",
  data() {
    return {
      images: {
        banner: require("../../../assets/man/banner.png"),
        fenlai: require("../../../assets/man/fenlai.png"),
        fabu: require("../../../assets/man/fabu.png"),
        bianji: require("../../../assets/man/bianji.png"),
        shanchu: require("../../../assets/man/shanchu.png"),
        xiaolongx: require("../../../assets/man/xiaolongx.png")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.productman {
  margin-bottom: 120px;
  .productman-banna {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    .pro-nowbanan {
      background: rgba(241, 241, 241, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      border-radius: 7px;
      text-align: center;
      margin-top: 20px;
      width: 160px;
      height: 50px;
      p {
        line-height: 50px;
        font-size: 28px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(162, 162, 162, 1);
      }
    }
    .pro-click {
      img {
        width: 172px;
        height: 85px;
      }
    }
  }
  .productman-context {
    border-bottom: 20px solid #eee;
    //       background:rgba(235,233,233,1);
    // border:0px solid rgba(0,0,0,1);
    .pro-text-top {
      display: flex;
      margin: 20px;
      .img-dis {
        flex: 1;
        img {
          height: 144px;
          width: 119px;
        }
      }

      .text-name {
        flex: 5;
        margin: 20px;
        .name {
          font-size: 28px;
          display: block;
          font-family: Droid Sans Fallback;
          font-weight: bold;
          color: rgba(46, 46, 46, 1);
          margin-bottom: 20px;
        }
        .price {
          font-size: 28px;
          font-family: Droid Sans Fallback;
          font-weight: bold;
          color: rgba(255, 63, 63, 1);
        }
      }
      /deep/ .van-icon {
        flex: 1;
        font-size: 50px;
        margin: auto;
      }
    }
    .pro-edit-bom {
      border-top: 2px solid #eee;
      display: flex;
      .weilxian {
        border-right: 3px solid #eee;
      }
      div {
        flex: 1;
        text-align: center;
        margin: 20px 0;
        img {
          width: 26px;
          height: 26px;
        }
        span {
          font-size: 22px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(173, 173, 173, 1);
        }
      }
    }
  }
}
</style>