<template>
  <div class="goodslistitem" @click="itemClick">
    <img :src="item.show.img" alt="" class="image" @load="itemLoad">
    <div class="title">{{item.title}}</div>
    <div class="detail">
      <div class="left">{{item.price}}</div>
      <div class="right">
        <!-- <img src="../../../assets/img/detail/detail_bottom.png" alt=""> -->
        <div class="img"></div>
        <div class="collect">{{item.cfav}}</div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  props:{
    item:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    itemLoad(){
      // console.log('jiazai');
      this.$bus.$emit('itemload')
    },
    itemClick(){
      this.$router.push('/detail/' + this.item.iid)
    }
  }
}
</script>

<style scoped>
  .goodslistitem{
    width: 45%;
  }
  .image{
    width: 100%;
    border-radius: 10px;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
  .detail{
    display: flex;
    justify-content: space-evenly;
  }
  .right{
    display: flex;
    position: relative;
  }

  .img{
    position: absolute;
    /* width: 20px; */
    left: -15px;
    top: 4px;
    width: 14px;
    height: 14px; 
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/cover;
  }
</style>