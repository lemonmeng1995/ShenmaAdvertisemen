<template>
<div id="dynamiccom">
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
    <div class="allTitle">
        <div class="allTitle-box">
            <p class="allTitle-tit active">全部</p>
            <p class="allTitle-line"></p>
        </div>
        <div class="allTitle-box">
            <p class="allTitle-tit">全部</p>
            <!-- <p class="allTitle-line"></p> -->
        </div>
        <div class="allTitle-box">
            <p class="allTitle-tit">全部</p>
            <!-- <p class="allTitle-line"></p> -->
        </div>
    </div>
    <div class="detail">
        <div class="detail-box">
            <p class="detail-box-title">火爆龙虾</p>
            <p class="detail-box-des">很好吃</p>
            <img  :src="images.vanswipe"/>
            <p class="detail-box-time">  2019-10-01 04:38:28发布</p>
        </div>

          <div class="detail-box">
            <p class="detail-box-title">火爆龙虾</p>
            <p class="detail-box-des">很好吃</p>
            <img  :src="images.vanswipe"/>
            <p class="detail-box-time">  2019-10-01 04:38:28发布</p>
        </div>
        

    </div>

</div>
  
</template>

<script>
import GlobaHeader from "../globalcom/globaHeader";
export default {
    name:'dynamiccom',
    components: { GlobaHeader },
    data(){
        return{
             text: "动态",
             value:"",
            images: {
                vanswipe: require("../../assets/product/vanswipe.png"),
            },
        }
    },
    methods:{
        onSearch(){

        }
    }
}
</script>

<style lang="scss" scoped>
#dynamiccom{
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
  .allTitle{
      height:60px;
      padding:20px;
      border-bottom: 5px solid #eee;
      display:flex;
    //   justify-content:space-between;
      .allTitle-box{
          text-align: center;
           width:20%;
          .allTitle-tit{
            font-size:28px;
            font-family:Droid Sans Fallback;
            font-weight:400;
            color:rgba(168,168,168,1);
          }
          .allTitle-line{
              background:rgba(255,41,41,1);
                // border:0px solid rgba(0,0,0,1);
                border-radius:3px;
                width:39px;
                height:6px;
                margin:10px auto;

          }
          .active{
            font-size:33px;
            font-family:Droid Sans Fallback;
            font-weight:bold;
            color:rgba(255,41,41,1);

          }

      }
  }
  .detail{
      .detail-box{
          padding:34px;
          border-bottom: 4px solid #eee;
          .detail-box-title{
              padding:0px 0 0 10px;
              font-size:35px;
            font-family:Droid Sans Fallback;
            font-weight:400;
            color:rgba(27,27,27,1);

          }
          .detail-box-des{
            padding:0 0 5px 10px;
              font-size:28px;
font-family:Droid Sans Fallback;
font-weight:400;
color:rgba(168,168,168,1);

          }
          img{
              height:320px;
              width:100%;

          }
          .detail-box-time{
              padding:8px 0;
              font-size:24px;
                font-family:Droid Sans Fallback;
                font-weight:400;
                color:rgba(168,168,168,1);
          }

      }

  }
    
}

</style>