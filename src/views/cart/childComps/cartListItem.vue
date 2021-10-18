<template>
  <div class="cartlistitem">
    <div class="left">
      <button></button>
    </div>
    <div class="center">
      <img :src="item.image" alt="">
    </div>
    <div class="right">
      <div class="title">{{item.title}}</div>
      <div class="more">{{item.desc}}</div>
      <div class="bottom">
        <div class="price">{{item.price}}</div>
        <div class="count">X {{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'cartlistitem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .cartlistitem{
    display: flex;
    align-items: center;
    width: 100vh;
    overflow: hidden;
  }
  .left button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    
  }
  .center img{
    height: 18vh;
  }
  .right{
    font-size: 14px;
  }
  .right .title,.right .more{
    height: 20px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
		text-overflow: ellipsis;
  }
  .right .bottom{
    display: flex;
    justify-content: space-between;
  }
</style>