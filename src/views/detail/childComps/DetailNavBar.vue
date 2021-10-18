<template>
  <div id="detailnavbar">
    <nav-bar>
      <div class="left" slot="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div >
      <div class="center" slot="center" >
        <div class="centerItem"  v-for="(item,index) in option" :key="index" @click="swi(index)" :class="{isOption:index === rightNum}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  props:{
    option:Array,
    default(){
      return 0
    }
  },
  data(){
    return{
      rightNum:0
    }
  },
  methods:{
    swi(index){
      this.rightNum = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.left{
  text-align: center;
  
}
.left img{
  vertical-align: middle;
}
.center{
  display: flex;
  /* justify-content: space-evenly;   这样写的点击范围不够大 ，使用老师的flex：1   */
}
.center .centerItem{
  flex: 1;
  font-size: 13px;
}

.center .isOption{
  color: pink;
}
</style>