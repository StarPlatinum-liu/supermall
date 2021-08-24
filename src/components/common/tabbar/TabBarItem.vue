
<template>
    <div class="top-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },

    methods:{
      itemClick(){
        this.$router.replace(this)
      }
    }
  }
</script>

<style scoped>
  /*@import "src/assets/css/reset.css";*/
    .top-bar-item{
      height: 49px;
      flex: 1;
      width: 30px;
      font-size: 14px;
      text-align: center;
    }
  img{
    margin-top: 5px;
    width: 24px;
    vertical-align: top;
  }

</style>