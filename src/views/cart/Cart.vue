<template>
  <div class="cart">
    <nav-bar class="cartNav"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
    <scroll class="cart-scroll">
      <cart-list :cartInfo='$store.state.cartList'></cart-list>
      <!-- <h2>{{$store.state.cartList}}</h2> -->
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import cartList from './childComps/cartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import {mapGetters} from 'vuex'
  import Scroll from '../../components/content/scroll/Scroll.vue'
  export default {
    name: "Cart",
    components:{
      NavBar,
      Scroll,
      cartList,
      CartBottomBar
    },
    computed:{
      cartListLength(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
    overflow: auto;
  }
  .cartNav{
    background-color: pink;
    color: white;
    position: relative;
    z-index: 999;
  }
  .cart-scroll{
    height: calc(100vh - 44px - 49px);
  }
</style>