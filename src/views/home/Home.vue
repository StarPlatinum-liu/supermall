<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-bar"><div slot="center">淘宝</div></nav-bar>
    <tab-contral :title='["流行","新款","精选"]' class="tab-contral" ref='tabContrals'  @tabswitch="tabswitch" v-show="tabShow"></tab-contral>

    <scroll class="content" ref="content" :probe-type="3" :pullUpLoad="true" 
    @scroll="scroll" @pullingup='pullingup'>
      <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad' class="home-swiper"></home-swiper>
      <recommend-view :recommends = recommends></recommend-view>
      <featuer-view></featuer-view>
      <tab-contral :title='["流行","新款","精选"]' @tabswitch="tabswitch" ref='tabContral'></tab-contral>
      <goods-list :goods = "goods[goodstype].list" class="goods"></goods-list>  
    </scroll>
    <back-top @click.native="backtop" v-show="isShow"></back-top>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import TabContral from "../../components/content/tabContral/TabContral.vue"
import GoodsList from "../../components/content/goods/GoodsList.vue"
import Scroll from "../../components/content/scroll/Scroll.vue"
import BackTop from "../../components/content/backTop/BackTop.vue"

import RecommendView from "./childComps/RecommendView.vue"
import FeatuerView from "./childComps/FeatureView.vue"

import {getHomeMultidata,getHomeGoods} from "../../network/home";
import {debounce} from "common/utils";


export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    TabContral,
    GoodsList,
    Scroll,
    BackTop,

    RecommendView,
    FeatuerView
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodstype:'pop',
      isShow:false,
      tabShow:false,
      tabOffsetTop:0,
      saveY:0
    }
  },
  //生命周期钩子函数
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    const refresh = debounce(this.$refs.content.refresh,500)
    this.$bus.$on('itemload',() => {
      refresh()
    })
  },

  activated(){
    // console.log('enter' + this.saveY)               设置进入的距离
    this.$refs.content.scroll.scrollTo(0,this.saveY,0)
    this.$refs.content.refresh()
  },
  deactivated(){
    // console.log('leave ' + this.$refs.content.scroll.y)  记录离开时的距离
    this.saveY = this.$refs.content.scroll.y
  },
  methods:{
    /*
    事件监听相关
    */
    tabswitch(index){
      switch(index){
        case 0:
          this.goodstype = 'pop';
          break;
        case 1:
          this.goodstype = 'new';
          break;
        case 2:
          this.goodstype = 'sell'
      }
      this.$refs.tabContral.rightNum = index
      this.$refs.tabContrals.rightNum = index
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabContral.$el.offsetTop
      // console.log(this.$refs.tabContral.$el.offsetTop);        多少距离是开始将tab-contral隐藏

    },
    backtop(){
      this.$refs.content.scrollTo(0,0,500)
    },
    scroll(position){
      this.isShow = -position.y > 1100  
      this.tabShow = -position.y > this.tabOffsetTop
    },
    pullingup(){
      this.getHomeGoods(this.goodstype)
      this.$refs.content.refresh()
    },
    /*
    网络请求相关
    拿到相关数据
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
       this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
    });
    },
    getHomeGoods(type){
      
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.content.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
    /* overflow: hidden; */
  }
  .home-bar{
    background-color: pink;
    color: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .tab-contral{
    position: relative;
    top:44px;
    z-index: 99;
    background: white;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }

</style>
