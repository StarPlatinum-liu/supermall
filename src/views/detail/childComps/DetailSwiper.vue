<template>
  <swiper class="outside">
    <swiper-item class="inside" v-for="(item,id) in topImage" :key="id">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'

export default {
  name:'detailswiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .outside{
    height: 50vh;
  }
  .inside{
    height: 50vh;

  }
</style>