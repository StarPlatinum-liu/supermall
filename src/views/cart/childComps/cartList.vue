<template>
  <div>
    <cart-list-item class="list" v-for="(item,index) in cartInfo" :key = index :item = item></cart-list-item>
  </div>
</template>

<script>
import cartListItem from './cartListItem.vue'
export default {
  name:'cartlist',
  components:{
    cartListItem
  },
  props:{
    cartInfo:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.list{
  height: 18vh;
  width: 100%;
  overflow: hidden;
  
  border-bottom: 1px solid rgb(187, 187, 187);

}
</style>