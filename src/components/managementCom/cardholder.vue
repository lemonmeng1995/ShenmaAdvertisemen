<template>
  <div class="cardholder">
    <div class="cardholder-box">
      <div class="cardholder-list">
        <div class="list-top">
          <div class="top-img"><img  :src="images.heade" /></div>
          <div class="top-right">
            <div class="right-text">张三</div>
            <div class="right-tel">
              <img :src="images.tel" />
              <a href="">123456789</a>
            </div>
          </div>
        </div>
        <div class="list-bottom">
          <div>盼盼公司</div>
          <div>设计师</div>
        </div>
      </div>
        <div class="cardholder-list">
        <div class="list-top">
          <div class="top-img"><img  :src="images.heade" /></div>
          <div class="top-right">
            <div class="right-text">张三</div>
            <div class="right-tel">
              <img :src="images.tel" />
              <a href="">123456789</a>
            </div>
          </div>
        </div>
        <div class="list-bottom">
          <div>盼盼公司</div>
          <div>设计师</div>
        </div>
      </div>
        <div class="cardholder-list">
        <div class="list-top">
          <div class="top-img"><img  :src="images.heade" /></div>
          <div class="top-right">
            <div class="right-text">张三</div>
            <div class="right-tel">
              <img :src="images.tel" />
              <a href="">123456789</a>
            </div>
          </div>
        </div>
        <div class="list-bottom">
          <div>盼盼公司</div>
          <div>设计师</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardholder",
  data() {
    return {
      images: {
        tel: require("../../assets/man/tel.png"),
        bg: require("../../assets/man/bg.png"),
        heade: require("../../assets/man/heade.png")
      }
    };
  }
};
</script>

<style scoped lang="scss">
.cardholder {
  margin-bottom: 120px;
  background:#eee;
  .cardholder-box {
      padding:20px;
    
    .cardholder-list {
        padding:20px;
        margin:20px 0;
        // width:706px;
        height:269px;
        background:rgba(255,255,255,1);
        border:0px solid rgba(0,0,0,1);
        border-radius:7px;
      .list-top {
          display: flex;
        .top-img {
          width: 190px;
          height: 190px;
          box-shadow:0px 0px 30px rgb(177, 170, 170);
          border-radius: 50%;
          img{
              width:190px;
              height:190px;
          }
        }
        .top-right {
            margin-left:30px;
            margin-top:20px;
          .right-text {
            font-size: 35px;
            font-family: Droid Sans Fallback;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }
          .right-tel {
              margin-top: 20px;
            width: 232px;
            height: 60px;
            background: rgba(240, 240, 240, 1);
            border: 0px solid rgba(0, 0, 0, 1);
            border-radius: 30px;
            text-align: center;
            line-height: 60px;
            img{
                width:18px;
                height:28px;
                margin-top:10px;
            }
            a{
                font-size:28px;
font-family:Droid Sans Fallback;
font-weight:400;
text-decoration:underline;
color:rgba(18,150,219,1);

            }
          }
        }
      }
      .list-bottom {
          display: flex;
          justify-content:space-between;
          margin-top:25px;
          border-top:2px solid #eee;
          padding:10px;
        div {
          font-size: 32px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(8, 8, 8, 1);
        }
      }
    }
  }
}
</style>