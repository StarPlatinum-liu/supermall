<template>
  <div id="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
    // message:{
    //   type:String,
    //   default(){
    //     return '' 
    //   }
    // }
  },
  data(){
    return{
      isShow:false,
      message:''
    }
  },
  methods:{
    show(message,duration){
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
#toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(224, 224, 224);
  padding: 5px 9px;
  border-radius: 2px;
  z-index: 9999;
}
</style>