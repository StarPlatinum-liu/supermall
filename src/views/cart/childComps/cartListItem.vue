<template>
  <div class="cartlistitem">
    <div class="left">
      <button @click="change" :class="{checked:item.checked}"></button>
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
  data(){
    return{
      check:false,
    }
  },
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    change(){
      this.item.checked = !this.item.checked
      // console.log(this.item.checked); 显示点击状态
    }
  }
}
</script>

<style scoped>
  .cartlistitem{
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    justify-content: space-evenly;
  }

  .left button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    
  }
  .center img{
    height: 16vh;
  }
  .right{
    font-size: 14px;
    width: 220px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }
  .title,.more{
    height: 20px;
    white-space: nowrap;
		text-overflow: ellipsis;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
  }
  .right .title{
    font-size: 16px;
    font-weight: bold;
  }
  .bottom .price{
    color: pink;
    font-size: 16px;
        font-weight: bold;
  }
  .checked{
    background-color: pink;
  }
</style>