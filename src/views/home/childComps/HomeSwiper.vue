<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper";
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{
        emito:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.emito){
          this.$emit('swiperImageLoad')
          this.emito = true
        }
        
        
      }
    }

  }
</script>

<style scoped>

</style>