<template>
  <div id="detail">
    <detail-nav-bar :option="option"></detail-nav-bar>  
    <scroll class="detail-scroll">
      <detail-swiper :topImage='topImage'></detail-swiper>
      <!-- <div>{{$store.state.cartList}}</div> -->
      <ul>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
        <li>''</li>
      </ul>
    </scroll>

    <detail-bottom-bar @shopClick='shopClick'></detail-bottom-bar>

  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import Scroll from '../../components/content/scroll/Scroll.vue'

import{getDetail,Goods,Shop} from '../../network/detail'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBottomBar,
    Scroll
  },
  data(){
    return{
      iid:null,
      option:['商品','参数','评论','推荐'],
      topImage:[],
      goods:{},
      goodsInfo:{},
      shopInfo:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[],
      themeTopY:null,
      currentIndex:0,
      inShowBackTop:false
      
    }
  },
  created(){
    this.iid = this.$route.params.iid

    getDetail(this.iid).then((rea)=>{
      // console.log(rea);
      const data = rea.result
      this.topImage = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)
    },(err)=>{
      console.log(err);
    })
  },
  methods:{
    shopClick(){
      const produce = {}
      produce.image = this.topImage[0]
      produce.title = this.goods.title
      produce.desc = this.goods.desc
      produce.price = this.goods.oldPrice
      produce.iid = this.iid
      
      this.$store.dispatch('addCart',produce)
      // alert('加入购物车成功')
    }
  }
}
</script>

<style scoped>
#detail{
  background-color: white;
  height: 100vh;
  width: 100vw;
  
  overflow: auto;
  position: relative;
  z-index: 999;
}

.detail-scroll{
  height: calc(100vh - 44px - 45px);
  overflow: hidden;
}

</style>