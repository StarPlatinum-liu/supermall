<template>
  <div class="cartbottombar">
    <div class="left">
      <button class="button" :class="{isSellectAll:sellectAll}"></button>
      <div>全选</div>
    </div>
    <div class="center">
      总计{{}}
    </div>
    <div class="right">
      去结算
    </div>
  </div>
</template>

<script>
export default {
  name:'cartbottombar',
  data(){
    return{
      sellectAll:false
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
  .cartbottombar{
    width: 100vw ;
    height: 5vh;
    background-color: rgb(220, 220, 220);
    position: fixed;
    bottom: 49px;
    display: flex;
    align-items: center;
  }
  .left{
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  .center{
    flex-grow: 1;
  }
  .right{
    height: 100%;
    width: 30vw;
    line-height: 5vh;
    text-align: center;
    background-color: rgb(253, 126, 126);
    flex-grow: 2;
    
  }
  .button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .isSellectAll{
    background-color: pink;
  }
</style>