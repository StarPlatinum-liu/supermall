<template>
  <div class="home">
    <nav-bar class="home-bar"><div slot="center">淘宝</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends = recommends></recommend-view>
    <featuer-view></featuer-view>
    <tab-contral :title='["流行","新款","精选"]' class="tab-contral"></tab-contral>
    <goods-list :goods = 'goods'></goods-list>

    <tian-chong></tian-chong>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import TabContral from "../../components/content/tabContral/TabContral.vue"
import GoodsList from "../../components/content/goods/GoodsList.vue"

import RecommendView from "./childComps/RecommendView.vue"
import FeatuerView from "./childComps/FeatureView.vue"
import TianChong from "./childComps/TianChong.vue" 

import {getHomeMultidata} from "../../network/home";

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    TabContral,
    GoodsList,

    RecommendView,
    FeatuerView,

    TianChong
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
  .tab-contral{
    position: sticky;
    background: white;
    z-index: 100;
    top: 0;
    right: 0;
  }
</style>
