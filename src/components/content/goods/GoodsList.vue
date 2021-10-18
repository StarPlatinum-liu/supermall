<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goods" :key="index" :item='item'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
  name:'GoodList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
  
}
</script>

<style scoped>
  .goodslist{
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;

  }
</style>