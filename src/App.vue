<template>
  <div id="app">
    <router-view/>
     <div class="menuList_box"> 
        <div class="menuList"> 
          
       <router-link  :to="{path:'/home'}">
          <img :src="images.businesscard" alt="" >
       </router-link>
            
       <router-link :to="{path:'/product'}"  >
          <img :src="images.product1" alt="" >
       </router-link>
       
            
       <router-link to="{ name: 'Freecreation'}">
          <img class= "freecreation" :src="images.freecreation" alt="" >
       </router-link>
            
       <router-link :to="{ name: 'Dynamiccom'}">
          <img :src="images.dynamiccom" alt="" >
       </router-link>
            
       <router-link :to="{ name: 'Briefintroduction'}">
          <img :src="images.briefintroduction" alt="" >
       </router-link>
        <!-- <a @click="Logins('index')">
           <img src="../assets/images/homesele.png" alt="" v-if="this.$route.path=='/index'">
           <img src="../assets/images/homeon.png" alt="" v-else>
           <i :class="this.$route.path=='/index'?'menuIn':''">首页</i>
          </a>
        <a @click="Logins('order')">
          <img src="../assets/images/ordersele.png" alt="" v-if="this.$route.path=='/order'">
           <img src="../assets/images/orderon.png" alt="" v-else>
           <i :class="this.$route.path=='/order'?'menuIn':''">订单</i>
        </a>
        <a @click="Logins('user')">
          <img src="../assets/images/ourssele.png" alt="" v-if="this.$route.path=='/user'">
          <img src="../assets/images/ourson.png" alt="" v-else>
          <i :class="this.$route.path=='/user'?'menuIn':''">我的</i>
        </a> -->
      </div>

     </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      images:{
        briefintroduction:require("../src/assets/home/briefintroduction.png"),
        dynamiccom:require("../src/assets/home/dynamiccom.png"),
        freecreation:require("../src/assets/home/freecreation.png"),
        product1:require("../src/assets/home/product1.png"),
        businesscard:require("../src/assets/home/businesscard.png"),

      }
    }

  }
}
</script>

<style  lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding:0;

   h1,h2,h3,h4,p{
    margin:0;
    padding:0;
  }
  // *{
  //   margin:0;
  //   padding:0;
  // }
   .menuList_box{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 120px;
      border-top:1px solid #e4e4e4;
      box-sizing: border-box;
      .menuList{
        display: flex;
        height: 100%;
        line-height:120px;
        // padding: 20px 0 10px 0;
        justify-content: space-between;
        background: white;
        a{
          display: inline-flex;
          flex: 1;
          justify-content: center;
          flex-wrap: wrap;
          align-content: space-between;
          margin: auto;
          // padding: 20px 0 10px 0;
          img{
            width: 50px;
            height: 73px;
          }
          .freecreation{
            width:103px;
            height:73px;
          }
        }
      }
    }
}
</style>
