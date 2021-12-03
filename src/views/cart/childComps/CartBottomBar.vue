<template>
  <div class="cartbottombar">
    <div class="left">
      <button class="button" :class="{isSellectAll:sellectAll}" @click="comput"></button>
      <div>全选</div>
    </div>
    <div class="center">
      总计:￥{{totalPrice}}
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
      // sellectAll:false
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
  computed:{
    totalPrice(){
      let sum = this.$store.state.cartList.filter((item)=>{
        return item.checked
      }).reduce((previousValue,item)=>{
        return previousValue + item.price.slice(1) * item.count
      },0)
      return sum
    },
    sellectAll(){
      if(this.$store.state.cartList.length == 0) return false
      return this.$store.state.cartList.every(i => i.checked)
    }
  },
  methods:{
    comput(){
      if(this.$store.state.cartList.every(i => i.checked)){
        this.$store.state.cartList.forEach(i => {
          i.checked = false
        })
      }else{
        this.$store.state.cartList.forEach(i => {
        i.checked = true
        })
      }
    }
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
    justify-content: center;
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
  .checked{
    background-color: pink;
  }
</style>