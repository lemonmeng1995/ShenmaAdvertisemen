<template>
  <div id="productdetails">
    <GlobaHeader :text="text" />
    <div class="context-banban">
          <!-- <van-image :src="images.xiaolongx"   fit="contain"/> -->
     
      <img :src="images.xiaolongx" />
      <p class="context-banban-text">小龙虾</p>
      <p class="context-banban-price">￥40</p>
    </div>
    <div class="gelixian"></div>
    <div class="product-detail">
        <p class="product-title">产品介绍</p>
        <p class="product-text">好吃得小龙虾</p>
        <!-- <p class="text-img"   :style="{backgroundImage: 'url(' + images.xiaolongx + ')', backgroundSize:'cover'}"></p> -->

           <!-- <van-image :src="images.xiaolongx"   fit="scale-down"/> -->

        <img :src="images.xiaolongx" />
    </div>
  </div>
</template>

<script>
import GlobaHeader from "../globalcom/globaHeader";

export default {
  name: "productdetails",
  components: { GlobaHeader },
  data() {
    return {
      text: "产品",
      images: {
        xiaolongx: require("../../assets/product/xiaolongx.png")
      }
    };
  }
};
</script>

<style scoped lang="scss">
#productdetails {
    margin-bottom: 120px;
  .context-banban {
    // .van-image{
    //   width: 576px;
    //   height: 694px;
    //   margin: 87px;
    // }
       img{
      width: 576px;
      height: 694px;
      margin: 87px;
    }
    .context-banban-text {
      font-size: 35px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(38, 38, 38, 1);
      margin-left: 33px;
      margin-bottom: 20px;
    }
    .context-banban-price {
      font-size: 35px;
      font-family: FZDaHei-B02S;
      font-weight: bold;
      color: rgba(255, 64, 64, 1);
      margin-left: 33px;
      margin-bottom: 20px;
    }
  }
  .gelixian{
      width:100%;
      height:20px;
      background:rgba(241,241,241,1);
  }
  .product-detail{
      .product-title{
          margin:25px;
          font-size:35px;
font-family:Droid Sans Fallback;
font-weight:bold;
color:rgba(38,38,38,1);

      }
      .product-text{
            margin:25px;
          font-size:35px;
font-family:Droid Sans Fallback;
font-weight:bold;
color:rgba(109,109,109,1);

      }
      .text-img{
          height:351px;
          width:710px;
          padding:20px;
          overflow: hidden;
        //   background: url('./assets/product/xiaolongx.png') center top no-repeat

      }
     img{
          height:351px;
          width:710px;
          padding:20px;

      }
    //   .van-image{
    //       height:351px;
    //       width:710px;
    //       padding:20px;
    //   }

  }
}
</style>