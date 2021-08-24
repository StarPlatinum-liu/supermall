<template>
  <div class="home">
    <nav-bar class="home-bar"><div slot="center">淘宝</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";

import {getHomeMultidata} from "../../network/home";

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return{
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

    });
  }
}
</script>

<style scoped>
  .home-bar{
    background-color: pink;
    color: white;
  }
</style>
