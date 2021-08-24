<template>
  <div>
    <div id="top-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    components:{

    }
  }
</script>

<style scoped>
  @import "../../../assets/css/reset.css";
  #top-bar{
    display: flex;
    justify-content: space-around;
    background: #eee;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>