<template>
  <div id="bannerdynam">
    <div class="banner-title">新闻Banner管理</div>
    <div class="upload-img">
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="onsubmit">
      <div>提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bannerdynam",
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#bannerdynam {
  height: 100%;
  width: 100%;
  background: #eee;
  margin-bottom: 250px;
  .banner-title {
    padding: 20px;
    font-size: 35px;
    font-family: Droid Sans Fallback;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .upload-img {
    margin: 30px;
    /deep/ .van-uploader__preview {
      //   padding:40px;
      height: 400px;
      width: 100%;
      .van-uploader__preview-image {
        height: 400px;
        width: 100%;
      }
    }
    /deep/ .van-uploader__upload {
      height: 288px;
      width: 100%;
    }
  }
  .onsubmit {
    position: fixed;
    bottom: 120px;
    height: 126px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border: 0px solid rgba(0, 0, 0, 1);
    div {
      margin: 20px;
      height: 88px;
      line-height: 88px;
      background: rgba(64, 179, 244, 1);
      border: 0px solid rgba(0, 0, 0, 1);
      border-radius: 44px;
      text-align: center;
      font-size: 35px;
      font-family: Droid Sans Fallback;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>