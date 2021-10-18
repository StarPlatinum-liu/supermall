<template>
  <div class="detail-bottom">
    <div class="left">
      <div class="kefu">客服</div>
      <div class="dianpu">店铺</div>
      <div class="collect">收藏</div>
    </div>

    <div class="right">
      <div class="shops" @click="shopClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>

export default {
  name:'detailbottom',
  methods:{
    shopClick(){
      this.$emit('shopClick')
    }
  }

}
</script>

<style scoped>
  .detail-bottom{
    position: fixed;
    bottom: 0;
    height: 7vh;
    width: 100vw;
    display: flex;
    border-top: 1px solid rgb(218, 218, 218);
    font-size: 14px;
    background-color: white;
    
  }
  .detail-bottom .left, .detail-bottom .right{
    flex: 1;
    display: flex;
    text-align: center;
    
  }
  .left div,.right div{
    flex: 1;
    line-height: 7vh;
  }
  .shops{
    background-color: rgb(221, 221, 0);
  }
  .buy{
    background-color: pink;
  }

</style>