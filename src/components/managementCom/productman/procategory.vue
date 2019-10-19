<template>
  <div class="procategory">
    <div class="procategory-top">
      <div class="procategory-top-left">产品类别</div>
      <div class="procategory-top-right">
        <div @click="getCatrelease">+添加新类别</div>
      </div>
    </div>
    <div class="procategory-context">
      <div class="context-box">
        <div class="text">
          <span class="text-onen">排序1</span>
          <span class="text-onet">食物</span>
        </div>
        <div class="icon">
          <img :src="images.bianji" @click="getCatrelease"/>
          <img :src="images.shanchu" />
        </div>
      </div>
      <div class="context-box">
        <div class="text">
          <span class="text-onen">排序1</span>
          <span class="text-onet">食物</span>
        </div>
        <div class="icon">
          <img :src="images.bianji" />
          <img :src="images.shanchu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "procategory",
  data() {
    return {
      images: {
        bianji: require("../../../assets/man/bianji.png"),
        shanchu: require("../../../assets/man/shanchu.png")
      }
    };
  },
  methods:{
    getCatrelease(){
      this.$router.push("/catrelease")
    }
  }
};
</script>

<style  lang="scss" scoped>
.procategory {
  margin-bottom: 120px;
  .procategory-top {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    border-bottom: 30px solid #eee;
    .procategory-top-left {
      font-size: 35px;
      font-family: Droid Sans Fallback;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
    .procategory-top-right {
      height: 59px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(207, 204, 204, 1);
      border-radius: 7px;
      width: 177px;
      div {
        line-height: 59px;
        text-align: center;
        font-size: 24px;
        font-family: Droid Sans Fallback;
        font-weight: 400;
        color: rgba(52, 191, 255, 1);
      }
    }
  }
  .procategory-context {
    .context-box {
      display: flex;
      border-bottom: 3px solid #eee;
      height: 120px;
      margin-left: 30px;
      .text {
        flex: 1;
        line-height: 120px;
        .text-onen {
          font-size: 24px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(177, 177, 177, 1);
          padding: 0 20px;
        }
        .text-onet {
          font-size: 28px;
          font-family: Droid Sans Fallback;
          font-weight: 400;
          color: rgba(99, 98, 98, 1);
          padding: 0 40px 0 80px;
        }
      }
      .icon {
        flex: 1;
        line-height: 140px;
        img {
          padding: 0 40px 0 100px;
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}
</style>