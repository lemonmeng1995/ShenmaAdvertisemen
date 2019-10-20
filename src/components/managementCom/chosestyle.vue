<template>
  <div class="chosestyle">
    <div class="cho-style">请选择风格</div>
    <div class="img-box">
      <img :src="images.fff" />
      <img :src="images.red" />
      <img :src="images.blue" />
      <img :src="images.zise" />
    </div>
    <div class="submit">提交</div>
  </div>
</template>

<script>
export default {
  name: "chosestyle",
  data() {
    return {
      images: {
        fff: require("../../assets/chostyle/fff.png"),
        blue: require("../../assets/chostyle/blue.png"),
        red: require("../../assets/chostyle/red.png"),
        zise: require("../../assets/chostyle/zise.png")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.chosestyle {
  margin: 20px 20px 120px 20px;
  .cho-style {
    font-size: 30px;
    font-weight: 600px;
    height: 60px;
    line-height: 60px;
    margin: 20px;
  }
  .img-box {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 43%;
      padding: 22px;
    }
  }
  .submit {
    height: 86px;
    background: rgba(255, 59, 59, 1);
    border: 0px solid rgba(0, 0, 0, 1);
    border-radius: 7px;

    font-size: 32px;
    font-family: Droid Sans Fallback;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 86px;
    margin:50px 20px;;
  }
}
</style>