<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-inner">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default:{
          return:[]
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  padding: 10px 0;
  border-bottom: 7px solid rgb(235, 235, 235);
}
.recommend .recommend-inner{
  text-align: center;
  flex: 1;
  font-size: 10px;
  color: black;
}
.recommend .recommend-inner img{
  width: 65px;
}
/* .recommend .recommend-inner div{
  width: 65px;
} */
</style>